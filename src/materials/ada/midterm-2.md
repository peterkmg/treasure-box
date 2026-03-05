---
title: '[ADA] Midterm Test Sample 2'
---

# Store Management System

## Submission Requirements

> **Important**: You can only submit ONE time. Submit in a `.zip` file ONLY!

### Files to Include

- Source files: `*.adb`, `*.ads` files and the connected `.gpr` project file
- Delete all compiled files (`*.o`, `*.exe`, etc.)

### Declaration

Include the following declaration in every `.adb` solution file to declare academic integrity:

```ada
-- Ada Programming & Generic Midterm 2025.11.7.
-- This solution was submitted and prepared by <Name, Neptun ID> for midterm of the Ada Programming course.
-- I declare that this solution is my own work.
-- I have not copied or used third-party solutions.
-- I have not passed my solution to my classmates, neither made it public.
-- Students' regulation of Eotvos Lorand University (ELTE Regulations Vol. II. 74/C.) states that as long as
-- a student presents another student's work - or at least the significant part of it - as his/her own performance
-- it will count as a disciplinary fault.
-- The most serious consequence of a disciplinary fault can be dismissal of the student from the University.
```

### Resources

You may use: [Ada 2022 Standard](http://ada-auth.org/standards/ada22.html)

## Assignment Overview

Create a program that manages a store using generic programming.

## Package Specification

Implement a generic `Shopping` package with two generic parameters that handle food items and customers.

### Generic Parameters

- **`TFood`**: accepts any discrete type
- **`TCustomer`**: accepts unrestricted private type

### Store Type

Define a private record type `Store` within the `Shopping` package with the following fields:

- **`prices`**: an array that maps each value of `TFood` to a `Float` representing the price of that food item

  - Array type name: `TPriceArray`

- **`instock`**: an array that maps each value of `TFood` to a `Natural` representing the quantity in stock for that food item
  - Array type name: `TStockArray`

> **Note**: Place these array types appropriately (public/private) depending on needs.

### Required Operations

Implement the following operations in the `Shopping` package:

- **`SetPrice`**: sets the price for a specific food in the store

  ```ada
  procedure SetPrice(s: in out Store; foodName: TFood; price: Float);
  ```

- **`SetInStocks`**: assigns in-stock amounts of food from the input array to the in-stock array of the store

  - If the input array does not include every food index of the instock array, assign only the ones it has

  ```ada
  procedure SetInStocks(s: in out Store; stocks: TStockArray);
  ```

- **`BuyFood`**: a generic procedure that handles food purchases

  ```ada
  generic
    with function HasEnoughMoney(customer: TCustomer; payment: Float) return Boolean;
    with procedure DeductMoney(customer: in out TCustomer; payment: Float);
  procedure BuyFood(s: in out Store; customer: in out TCustomer; foodName: TFood; amount: Positive);
  ```

  **Implementation Details**:

  1. Check if the store has enough amount of required food

     - If not, print: `We don't have enough {food}`
     - Stop execution

  2. Check if customer has enough money to pay for the food

     - If not, print: `Payment declined`
     - Stop execution

  3. If both checks pass:
     - Deduct the amount of food from the `instock` array
     - Deduct payment from customer's money
     - Print: `Sold {amount} {food}`

## Main Unit Implementation

### Type Definitions

- **`TFood`**: enumeration type with 5 values of your choice

  ```ada
  type TFood is (Apple, Banana, Cherry, Durian, Epicorn);
  ```

- **`TCustomer`**: record type with a single field

  ```ada
  type TCustomer is record
    money : Float;
  end record;
  ```

### Supporting Functions and Procedures

- **`HasEnoughMoney`**: returns whether customer has enough money for the payment

  ```ada
  function HasEnoughMoney(c: TCustomer; payment: Float) return Boolean;
  ```

- **`DeductMoney`**: deducts the payment amount from customer's money

  ```ada
  procedure DeductMoney(c: in out TCustomer; payment: Float);
  ```

### Testing Requirements

1. Instantiate the `Shopping` package using `TFood` and `TCustomer` as generic parameters
2. Declare a `Store` variable and set prices and stock amounts for each food item
3. Declare a `TCustomer` variable with an initial amount of money
4. Instantiate the `BuyFood` procedure with `HasEnoughMoney` and `DeductMoney`
5. Make calls to `BuyFood` so that **every error and success message is printed out**:
   - Successful purchase message
   - "Not enough stock" message
   - "Payment declined" message

## Solution

::: code-group

```ada [main.adb]
with Shopping, Ada.Text_IO;
use Ada.Text_IO;

procedure Main is

  type TFood is (Apple, Banana, Cherry, Durian, Epicorn);

  type TCustomer is record
    money : Float;
  end record;

  function HasEnoughMoney(c: TCustomer; payment: Float) return Boolean is
  begin
    return c.money >= payment;
  end HasEnoughMoney;

  procedure DeductMoney(c: in out TCustomer; payment: Float) is
  begin
    c.money := c.money - payment;
  end DeductMoney;

  package My_Shopping is new Shopping(TFood, TCustomer);
  use My_Shopping;

  My_Store: Store;

  customer: TCustomer := (money => 420.0);

  complete_array: TStockArray(TFood) := (others => 40);
  incomplete_array: TStockArray(Banana..Durian) := (10, 20, 30);

  procedure BuyFoodIns is new BuyFood(HasEnoughMoney, DeductMoney);

begin

  SetInStocks(My_Store, complete_array);
  SetInStocks(My_Store, incomplete_array);

  SetPrice(My_Store, Epicorn, 15.3);
  SetPrice(My_Store, Banana, 5.21);
  SetPrice(My_Store, Cherry, 1.12);
  SetPrice(My_Store, Apple, 10.15);
  SetPrice(My_Store, Durian, 0.69);

  -- Test successful purchase
  BuyFoodIns(My_Store, customer, Cherry, 5);

  -- Test insufficient stock
  BuyFoodIns(My_Store, customer, Banana, 11);

  -- Test insufficient funds
  BuyFoodIns(My_Store, customer, Epicorn, 40);

end Main;
```

```ada [shopping.ads]
generic
  type TFood is (<>);
  type TCustomer is private;
package Shopping is

  type Store is private;

  type TStockArray is array (TFood range <>) of Natural;

  procedure SetPrice(s: in out Store; foodName: TFood; price: Float);
  procedure SetInStocks(s: in out Store; stocks: TStockArray);

  generic
    with function HasEnoughMoney(customer: TCustomer; payment: Float) return Boolean;
    with procedure DeductMoney(customer: in out TCustomer; payment: Float);
  procedure BuyFood(s: in out Store; customer: in out TCustomer; foodName: TFood; amount: Positive);

  procedure DebugPrint(s: Store);

private

  type TPriceArray is array (TFood) of Float;

  type Store is record
    prices : TPriceArray;
    instock : TStockArray(TFood);
  end record;

end Shopping;
```

```ada [shopping.adb]
with Ada.Text_IO;
use Ada.Text_IO;

package body Shopping is

  procedure SetPrice(s: in out Store; foodName: TFood; price: Float) is
  begin
    s.prices(foodName) := price;
  end SetPrice;

  procedure SetInStocks(s: in out Store; stocks: TStockArray) is
  begin
    for i in stocks'Range loop
      s.instock(i) := stocks(i);
    end loop;
  end SetInStocks;

  procedure BuyFood(s: in out Store; customer: in out TCustomer; foodName: TFood; amount: Positive) is
    payment: Float := s.prices(foodName) * Float(amount);
  begin
    if s.instock(foodName) >= amount then
      if HasEnoughMoney(customer, payment) then
        s.instock(foodName) := s.instock(foodName) - amount;
        DeductMoney(customer, payment);
        Put_Line("Sold " & amount'Image & " " & foodName'Image);
      else
        Put_Line("Payment declined");
      end if;
    else
      Put_Line("We don't have enough " & foodName'Image);
    end if;
  end BuyFood;

  procedure DebugPrint(s: Store) is
  begin
    Put_Line("Instock:");
    for i in s.instock'Range loop
      Put_Line(i'Img & "=>" & s.instock(i)'Img);
    end loop;

    Put_Line("Prices:");
    for i in s.prices'Range loop
      Put_Line(i'Img & "=>" & s.prices(i)'Img);
    end loop;
  end DebugPrint;

end Shopping;
```

:::
