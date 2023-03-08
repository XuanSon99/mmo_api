<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use stdClass;
use Drnxloc\LaravelHtmlDom\HtmlDomParser;

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
        $param = 'https://www.24h.com.vn/gia-vang-hom-nay-c425.html';
        $dom = HtmlDomParser::file_get_html($param);

        $data = array();

        foreach ($dom->find('.gia-vang-search-data-table tr') as $value) {
            $list = new \stdClass();
            $td = $value->find('td');
            $list->name = trim($td[0]->text(), " ");
            $list->buy = $td[1]->find('span', 0)->text();
            $list->sell = $td[2]->find('span', 0)->text();
            $list->old_buy = $td[3]->text();
            $list->old_sell = $td[4]->text();
            $list->buy_change = str_replace(",", "", $list->buy) - str_replace(",", "", $list->old_buy);
            $list->sell_change = str_replace(",", "", $list->sell) - str_replace(",", "", $list->old_sell);

            array_push($data, $list);
        }
        
        return $data;
    }

    public function getMarketForce()
    {
        $param = 'http://taiem.vn/site/strong.html';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        $dom = new \DOMDocument;
        $html_data  = mb_convert_encoding($response , 'HTML-ENTITIES', 'UTF-8'); 
        @$dom->loadHTML($html_data);

        $finder = new \DomXPath($dom);
        $table = $finder->query("//*[contains(@class, 'type1')]");

        $data = array();

        $rate = $this->getWorldPrice();

        foreach ($table as $key => $tr) {
            $list = new \stdClass();
            $th = $tr->getElementsByTagName('th');
            $list->name = $th[0]->nodeValue;
            $list->price = $rate[$key]['buy'];
            $list->five_minutes = $th[2]->nodeValue;
            $list->fifteen_minutes = $th[3]->nodeValue;
            $list->one_hour = $th[4]->nodeValue;
            array_push($data, $list);
        }

        return $data;
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
        $rate = $json['data']['data'];

        $this->moveElement($rate, 1, 0);
        $this->moveElement($rate, 4, 6);

        foreach ($rate as $key => $value) {
            if ($value['from'] == 'USD') {
                $rate[$key]['buy'] = round(1 / $value['buy'], 5);
            }
        }

        return $rate;
    }

    function moveElement(&$array, $a, $b)
    {
        $out = array_splice($array, $a, 1);
        array_splice($array, $b, 0, $out);
    }
}
