<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Profit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class CustomerController extends Controller
{
    public function index()
    {
        $customer = Customer::orderBy('created_at', 'DESC')->get();
        $data = array();
        foreach ($customer as $cus) {
            $list = new \stdClass();
            $profit = Profit::where('account', $cus->account)->first();
            $list->name = $cus->name;
            $list->account = $cus->account;
            $list->refferal = $cus->refferal;
            $list->agency = $cus->agency;
            $list->created_at = $cus->created_at;
            if ($profit) {
                $list->balance = $profit->balance;
                $list->profit = $profit->profit;
                $list->commission = $profit->commission;
                $list->brokerage_money = $profit->brokerage_money;
            }
            array_push($data, $list);
        }
        return $data;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account' => 'required|unique:customers'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Tài khoản đã tồn tại!"]], 400);
        }

        $data = new Customer([
            'name' => $request->name,
            'account' => $request->account,
            'refferal' => $request->refferal,
            'agency' => $request->agency
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function show(Customer $Customer)
    {
        $profit = Profit::where('account', $Customer->account)->orderBy('created_at', 'DESC')->get();

        return response()->json(["status" => true, "data" =>  $profit, "agency" => $Customer->agency], 200);
    }

    public function update(Request $request, Customer $Customer)
    {
        $Customer->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Customer $Customer)
    {
        $Customer->delete();
        return response()->json(["status" => true], 200);
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return Customer::where('account', 'like', "%{$query}%")->get();
    }
}
