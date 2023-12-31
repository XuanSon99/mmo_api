<?php

namespace App\Http\Controllers;

use App\Models\Profit;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class ProfitController extends Controller
{
    public function index()
    {
        return Profit::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $profit = Profit::where('account', $request->account)->first();

        if ($profit) {
            $profit->delete();
        }

        $data = new Profit([
            'account' => $request->account,
            'profit' => $request->profit,
            'commission' => $request->commission
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function show(Profit $Profit)
    {
        return $Profit;
    }

    public function update(Request $request, Profit $Profit)
    {
        $Profit->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Profit $Profit)
    {
        $Profit->delete();
        return response()->json(["status" => true], 200);
    }

    public function updateBrokerageMoney()
    {
        $customers = Customer::orderBy('created_at', 'DESC')->get();

        foreach ($customers as $cus) {
            $customer = Profit::where('account', $cus->account)->first();

            if ($customer) {
                $customer->update([
                    'brokerage_money' => 0
                ]);
            }
        }

        foreach ($customers as $cus) {
            $customer = Profit::where('account', $cus->account)->first();

            if ($customer) {
                $money = ($customer->profit - $customer->commission) / 10 +  $customer->commission / 4;
            } else {
                continue;
            }

            $f1_profit = Profit::where('account', $cus->refferal)->first();
            $f1_customer = Customer::where('account', $cus->refferal)->first();

            if ($f1_profit) {
                $brokerage_money = $f1_profit->brokerage_money + $money * 7 / 10;

                if ($f1_customer->agency) {
                    $brokerage_money = $f1_profit->brokerage_money + $money;
                }

                $f1_profit->update([
                    'brokerage_money' => $brokerage_money
                ]);
            }

            if ($f1_customer) {
                $f0_profit = Profit::where('account', $f1_customer->refferal)->first();

                if ($f0_profit) {
                    $f0_profit->update([
                        'brokerage_money' => $f0_profit->brokerage_money + $money * 3 / 10
                    ]);
                }
            }
        }
    }
}
