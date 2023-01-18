<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use stdClass;

class ClientController extends Controller
{

    public function index()
    {
        return Client::orderBy('created_at', 'DESC')->select('id', 'username', 'kyc', 'transaction', 'created_at', 'chat_id', 'reputation')->get();
    }

    public function update(Request $request, Client $Client)
    {
        $Client->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Client $Client)
    {
        $text = "Yêu cầu KYC của bạn đã không thành công. Vui lòng KYC lại!";
        $this->sendMessage($Client->chat_id, $text);

        $Client->delete();
        return response()->json(["status" => true], 200);
    }

    public function getUserInfo(Request $request)
    {
        $username = $request->route('username');
        $info = Client::where("username", $username)->first();
        return $info;
    }

    public function getTop()
    {
        return Client::orderBy('transaction', 'DESC')->where('transaction', '>', 0)->paginate(5);
    }

    public function checkUser(Request $request)
    {
        $username = $request->route('username');
        return Client::where('username', $username)->select('kyc', 'transaction', 'reputation')->first();
    }

    public function addKyc(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:clients',
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Yêu cầu đã được gửi!"]], 400);
        }

        $front_photo = $request->file('front_photo')->store('public/images');
        $back_photo = $request->file('back_photo')->store('public/images');
        $portrait_photo = $request->file('portrait_photo')->store('public/images');

        $data = new Client([
            'name' => $request->name,
            'phone' => $request->phone,
            'username' => $request->username,
            'ip_address' => $request->ip_address,
            'chat_id' => $request->chat_id,
            'reputation' => "no",
            'transaction' => 0,
            'kyc' => 'pending',
            'front_photo' => str_replace("public", "", $front_photo),
            'back_photo' => str_replace("public", "", $back_photo),
            'portrait_photo' => str_replace("public", "", $portrait_photo),
        ]);
        $data->save();

        $text = "<b>🎉 Gửi yêu cầu KYC thành công!</b>%0A%0ALiên hệ @ChoOTCVN_support để tham gia nhóm";
        $this->sendMessage($request->chat_id, $text);

        $chat_id = "-1001649021081";
        $text2 = "@" . $request->username . " đã gửi thông tin KYC!";
        $this->sendMessage($chat_id, $text2);

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function addCaptcha(Request $request)
    {
        $text = "<b>🎉 Xác minh thành công!</b>%0A%0ALiên hệ @ChoOTCVN_support để tham gia nhóm";
        $this->sendMessage($request->chat_id, $text);

        $chat_id = "-1001649021081";
        $text2 = "@" . $request->username . " đã xác minh không phải Robot thành công!";
        $this->sendMessage($chat_id, $text2);
    }

    public function sendMessage($chat_id, $text)
    {
        $token = "5960653063:AAHyOV3a4nndUwSyXc0Vkrh8Dq87LZ3dh00";

        $params = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . $text . "&parse_mode=html";

        Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($params);
    }

    public function sendMessWithBot(Request $request)
    {
        $this->sendMessage($request->chat_id, $request->content);
        return response()->json(["status" => true], 200);
    }

    public function getOverview()
    {
        $list = new \stdClass();
        $list->new_user = Client::whereDate('created_at', Carbon::today())->count();
        $list->total_user = Client::All()->count();
        return $list;
    }

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

    public function getCurrencyList()
    {
        // $param = 'https://openexchangerates.org/api/latest.json?app_id=754f6dd941404595ae483630201b04cf';
        $param = 'https://tygiado.com/wp-admin/admin-ajax.php?action=load_embed_currency&bank=';
        
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }
}
