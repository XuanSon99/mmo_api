<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Http;

class ClientController extends Controller
{
    public function getTop()
    {
        return Client::orderBy('transaction', 'DESC')->where('transaction', '>', 0)->paginate(2);
    }

    public function checkUser(Request $request)
    {
        $username = $request->route('username');
        return Client::where('username', $username)->select('kyc','transaction','reputation ')->first();
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
            'fb_link' => $request->fb_link,
            'chat_id' => $request->chat_id,
            'kyc' => 'pending',
            'front_photo' => str_replace("public", "", $front_photo),
            'back_photo' => str_replace("public", "", $back_photo),
            'portrait_photo' => str_replace("public", "", $portrait_photo),
        ]);
        $data->save();

        $text = "<b>🎉 Gửi yêu cầu KYC thành công!</b>%0A%0ALiên hệ @quocusdt để tham gia nhóm";
        $this->sendMessage($request->chat_id, $text);

        $chat_id = "-1001649021081";
        $text2 = "@" . $request->username . " đã gửi thông tin KYC!";
        $this->sendMessage($chat_id, $text2);

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function addCaptcha(Request $request)
    {
        $text = "<b>🎉 Xác minh thành công!</b>%0A%0ALiên hệ @quocusdt để tham gia nhóm";
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
}
