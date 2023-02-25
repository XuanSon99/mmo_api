<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use stdClass;

class RateController extends Controller
{
    public function getPrice(Request $request)
    {
        $param = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';
        $type = $request->route('type');

        $data = [
            'asset' => 'USDT',
            'fiat' => 'VND',
            'merchantCheck' => true,
            'page' => 1,
            'publisherType' => null,
            'rows' => 1,
            'tradeType' => $type,
        ];

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response;
    }

    public function getCoinList()
    {
        $param = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }

    public function getExchange()
    {
        $param = 'https://api.coingecko.com/api/v3/exchanges?per_page=20';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }

    public function getBankPrice()
    {
        // $param = 'https://openexchangerates.org/api/latest.json?app_id=754f6dd941404595ae483630201b04cf';
        $param = 'https://portal.vietcombank.com.vn/UserControls/TVPortal.TyGia/pListTyGia.aspx';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        $dom = new \DOMDocument;
        $dom->loadHTML($response);

        $finder = new \DomXPath($dom);
        $table = $finder->query("//*[contains(@class, 'odd')]");

        $data = array();

        foreach ($table as $tr) {
            $list = new \stdClass();
            $td = $tr->getElementsByTagName('td');
            $list->name = trim($td[0]->nodeValue, " ");
            $list->code = $td[1]->nodeValue;
            $list->buy = $td[2]->nodeValue;
            $list->transfer = $td[3]->nodeValue;
            $list->sell = $td[4]->nodeValue;
            array_push($data, $list);
        }

        return $data;
    }

    public function getGoldPrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/gold-price-v2';

        $json = json_decode(file_get_contents($param), true);
        return $json;
    }
    
    public function getNicePrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/nice-price';

        $json = json_decode(file_get_contents($param), true);
        return $json;
    }

    public function getWorldPrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/list-exchange?page=1&limit=10&sort=DESC&type=fiat_to_fiat&client_id=2';

        $json = json_decode(file_get_contents($param), true);
        return $json;
    }
}
