---
title: '[ADA] Basics'
---

# ADA Basics

This section covers the basic concepts of the ADA programming language.

## Hello, World!

```ada
with Ada.Text_IO; use Ada.Text_IO;

procedure Main is
begin
   Put_Line("Hello, World!");
end Main;
```

## Procedures and Functions

Procedures and functions are defined using the `procedure` and `function` keywords, respectively.

```ada
procedure Proc(x: Integer) is
begin
  ...
end Proc;

function Func(x: Integer) return Integer is
begin
  ...
  return ...;
end Func;
```

The difference between them is that functions return a value, while procedures do not.

## Variables

Variables are declared using the syntax:

```ada
variable_name: Type := initial_value;
```

## Declaration blocks

Within procedures and functions, you can declare variables, types, and other entities within a declaration block.

```ada
procedure Example is
  -- declarations start here
  x: Integer := 10;
  y: Integer := 20;
  z: Integer := x + y;
begin -- declarations end with begin statement
  -- code goes here
  ...
end Example;
```

Within declaration blocks, you can declare variables, types, constants, nested subprograms, and more.

Everything declared in a declaration block is local to that block and cannot be accessed from outside.

```ada
procedure Outer is
  x: Integer := 10;

  procedure Inner is
    y: Integer := 20;
  begin
    -- Can access x here
    -- But cannot access neither m nor My_Type here, because execution is linear
    ...
  end Inner;

  type My_Type is record
    a: Integer;
    b: Integer;
  end record;

  m: My_Type;

begin
  -- Cannot access y here
  ...
end Outer;
```

You can have inline declaration blocks as well within code:

```ada
procedure Example is
  x: Integer := 10;
begin
  x := x + 5;

  declare
    y: Integer := 20;
  begin
    -- Can access x and y here
    ...
  end;

  -- Cannot access y here, because it no longer exists
  ...
end Example;
```

Inline declare blocks can be viewed as anonymous procedures that are executed immediately. Lifetime of everything declared within such blocks ends at the end of the block.

This can be useful to limit the scope of variables or to create temporary variables without polluting the outer scope and to have better control over memory usage.

## File structure

An Ada program is typically organized into packages with an execution unit (main program).

Extensions of ADA source files are `.adb` for body files and `.ads` for specification files. You can think of specification files as `.h`header files in C/C++, while body files are similar to `.c`/`.cpp` source files.

For execution units (main programs), only body files (`.adb`) are needed.

The name of the file must match the name of the package or procedure/function defined within it.

::: code-group

```ada [main.adb]
with Utils;  -- Importing the Utils package

procedure Main is
begin
  Utils.Print_Message("Hello from ADA!");
end Main;
```

```ada [utils.ads]
package Utils is
  procedure Print_Message(Message: String);
end Utils;
```

```ada [utils.adb]
package body Utils is
  procedure Print_Message(Message: String) is
  begin
    Put_Line(Message);
  end Print_Message;
end Utils;
```

:::

If a single non-generic function or procedure is defined in a file, the package declaration can be omitted and the specification is not needed, but the file name must match the name of the function or procedure.

::: code-group

```ada [main.adb]
with Greet;  -- Importing the Greet procedure
procedure Main is
begin
  Greet("Ada");
end Main;
```

```ada [greet.adb]
procedure Greet(Name: String) is
begin
  Put_Line("Hello, " & Name & "!");
end Greet;
```

:::

## Control Statements

#### if-elsif-else

```ada
procedure Example is
  x: Integer := 10;
begin
  -- simple check
  if x = 1 then
    Put_Line("x is 1");
  end if;

  -- if-else
  if x = 1 then
    Put_Line("x is 1");
  else
    Put_Line("x is not 1");
  end if;

  -- if-elsif-else
  if x = 1 then
    Put_Line("x is 1");
  elsif x = 2 then
    Put_Line("x is 2");
  else
    Put_Line("x is neither 1 nor 2");
  end if;
end Example;
```

#### case

```ada
procedure Example is
  x: Integer := 2;
begin
  case x is
    when 1 =>
      Put_Line("x is 1");
    when 2 | 3 =>
      Put_Line("x is 2 or 3");
    when others =>
      Put_Line("x is something else");
  end case;
end Example;
```

#### loop

Ada has multiple ways to create loops.

```ada
procedure Example is
begin
  loop
    -- simple infinite loop
    ...
  end loop;
end Example;
```

To exit a loop, you can use the `exit` statement.

```ada
procedure Example is
begin
  loop
    ...
    exit; -- will exit after one iteration
  end loop;
end Example;
```

To exit on a condition, you can use `exit when`.

```ada
procedure Example is
  x: Integer := 0;
begin
  loop
    x := x + 1;
    exit when x >= 10; -- will exit when x is 10 or more
  end loop;
end Example;
```

Both `exit` and `exit when` can be used with any loop type.

Because `exit when` can be arbitrarily placed within loop's code, it can provide much needed utility, when not the entire loop iteration needs to run if some condition is met, even in `while` and `for` loops.

#### while loop

```ada
procedure Example is
  x: Integer := 0;
  s: Integer := 0;
begin
  while x < 10 loop
    x := x + 1;
  end loop;
end Example;
```

#### for-in loop

For-in loops are used to iterate over a range of values.

```ada
procedure Example is
begin
  for i in 1..10 loop
    Put_Line("Iteration: " & i'Image);
  end loop;
end Example;
```

Most commonly, for-in loops are used to iterate over arrays indexes.

```ada
procedure Example is
  type Int_Array is array (1..5) of Integer;
  arr: Int_Array := (10, 20, 30, 40, 50);
begin
  for i in arr'Range loop
    Put_Line("Element " & i'Image & ": " & arr(i)'Image);
  end loop;
  -- same as
  for i in arr'First..arr'Last loop
    Put_Line("Element " & i'Image & ": " & arr(i)'Image);
  end loop;
end Example;
```

#### for-of loop

If you do not require to work with the index of elements, you can use for-of loops to iterate directly over the elements.

```ada
procedure Example is
  type Int_Array is array (1..5) of Integer;
  arr: Int_Array := (10, 20, 30, 40, 50);
begin
  for element of arr loop -- element's index is inaccessible within this loop
    Put_Line("Element: " & element'Image);
  end loop;
end Example;
```
