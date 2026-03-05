---
title: '[ADA] Midterm Test Sample 1'
---

# Elections

For each grade, illustrate and test the operations extensively (keep also the previous grades' tests).

## Package

Implement a generic `election_package`. The package manages election results across regions and candidates.

### Generic Parameters

- **`Candidates`**: discrete type (enum representing several candidates of election)
- **`Regions`**: discrete type (enum representing several areas of country, e.g., Budapest, Debrecen, etc.)

### Election Type

Implement an `Election` limited private type with a discriminant `Count` of type `Integer` representing the number of candidates.

### Fields

- **`Regional_Votes`**: matrix type with `Regions` and `Candidates` indexes and `Integer` elements

  - Represents the votes for each candidate from different regions

:::details
| Regions \ Candidates | Rasul | Bill | Jill | Will | Nill |
|---------------------|-------|------|------|------|------|
| Budapest | 10 | 20 | 30 | 40 | 50 |
| Pecs | 15 | 25 | 30 | 35 | 45 | 55 |
| Gyor | 20 | 30 | 40 | 50 | 60 |
| Debrecen | 25 | 35 | 45 | 55 | 65 |
| Szeged | 30 | 40 | 50 | 60 | 70 |
:::

- **`Final_Votes`**: array of `Integer` with index of `Candidates`
  - Represents final votes result based on regional votes
  - Initially all final votes are 0

## Main unit

Define the following types in the main unit of the program:

```ada
type Candidates is (Rasul, Bill, Jill, Will, Nill);
type Regions is (Budapest, Pecs, Gyor, Debrecen, Szeged);
```

## Grade 2

### Operations

Implement the following operations in the `election_package`:

- **`Initialize_Regional_Votes`**: fills `Regional_Votes` matrix with random integers between 0 and 50

  ```ada
  procedure Initialize_Regional_Votes(e: in out Election);
  ```

- **`Finalize_Votes`**: fills `Final_Votes` array based on calculations from each region according to candidates

  - Example: Rasul got 10 votes from each region with 5 regions = total of 50

  ```ada
  procedure Finalize_Votes(e: in out Election);
  ```

- **`Final_Vote_Of_Candidate`**: returns the given candidate's total votes

  ```ada
  function Final_Vote_Of_Candidate(e: Election; c: Candidates) return Integer;
  ```

- **`Regional_Vote_Of_Candidate`**: returns regional votes' number based on the given region and candidate parameters
  ```ada
  function Regional_Vote_Of_Candidate(e: Election; r: Regions; c: Candidates) return Integer;
  ```

## Grade 3

### New Operations

Add the following operations to the previous mark:

- **`Find_First_Place`**: returns the candidate who has the most total votes

  ```ada
  function Find_First_Place(e: Election) return Candidates;
  ```

- **`Find_Last_Place`**: returns the candidate who has the least total votes

  ```ada
  function Find_Last_Place(e: Election) return Candidates;
  ```

- **`Find_N_th_Place`**: returns candidate who has the n-th most total votes

  ```ada
  function Find_N_th_Place(e: Election; n: Integer) return Candidates;
  ```

- **`Compare_Candidates`**: returns true if C1's total votes are greater than C2's total votes, false otherwise
  ```ada
  function Compare_Candidates(e: Election; c1: Candidates; c2: Candidates) return Boolean;
  ```

## Grade 4

### New Operations

Add the following operations to the previous mark:

- **`Calculate_Percentage_Of_Candidate`**: returns float percentage for a candidate's total votes over all votes in the election

  ```ada
  function Calculate_Percentage_Of_Candidate(e: Election; c: Candidates) return Float;
  ```

- **`Calculate_Regional_Percentage_Of_Candidate`**: returns float percentage for a candidate of a specific region

  ```ada
  function Calculate_Regional_Percentage_Of_Candidate(e: Election; r: Regions; c: Candidates) return Float;
  ```

- **`Print`**: prints regional votes if `b` is true, otherwise prints total votes
  ```ada
  procedure Print(e: Election; b: Boolean := True);
  ```

## Grade 5

### New Operations

Add the following operations to the previous marks:

<!-- - **`ForEach`**: a generic procedure inside the package with a region parameter, which performs an `Action` function parameter on the `Region` parameter and every candidate of the `Regional_Votes`
  - Example: if the Region is Budapest and the action is decreasing votes by 10, then for all votes of each candidate in Budapest, they should be decreased by 10 -->

- **`For_Each`**: a generic procedure inside the package.
  - **Generic parameter**: a function `Action` which takes an integer and returns an integer
  - **Parameters**: an `Election` and a `Region`
  - **Functionality**: performs the `Action` function on votes of each candidate in the given region.

```ada
procedure For_Each(e: in out Election; r: Regions);
```

###

- Create a function `My_Action` which takes an integer and returns it subtracted by 10

  - If votes go below 0, assign 0 to it

- Instantiate `My_For_Each` using `My_Action` function and test it extensively on the Elections

## Example: Random Integer Generation

```ada
with Ada.Numerics.Discrete_Random, Ada.Integer_Text_IO, Ada.Text_IO;
use Ada.Integer_Text_IO, Ada.Text_IO;

procedure test is
  package Random_int is new Ada.Numerics.Discrete_Random (Integer);
  G : Random_int.Generator;
begin
  Random_int.Reset(G);

  for i in 1..10 loop
    Put("Random Integer : ");
    Put(Random_int.Random(G));
    new_line;
  end loop;

end test;
```

## Solution

::: code-group

```ada [main.adb]
with Election_Package;
with Ada.Text_IO; use Ada.Text_IO;

procedure Main is

   type Candidates is (Rasul, Bill, Jill, Will, Nill);
   type Regions is (Budapest, Pecs, Gyor, Debrecen, Szeged);

   package Hungary_Election is new Election_Package(Candidates => Candidates,
                                                    Regions => Regions);
   use Hungary_Election;

   e: Election(5);

   function My_Action(n: Integer) return Integer
   is (if n - 10 < 0 then 0 else n - 10);

   procedure My_For_Each is new For_Each(Action => My_Action);

begin
   -- grade 2
   Initialize_Regional_Votes(e);
   Finalize_Votes(e);
   Put_Line(Final_Vote_Of_Candidate(e, Bill)'Image);
   Put_Line(Regional_Vote_Of_Candidate(e, Budapest, Will)'Image);

   -- grade 3
   Put_Line(Find_First_Place(e)'Image);
   Put_Line(Find_Last_Place(e)'Image);
   Put_Line(Find_N_th_Place(e, 1)'Image);
   Put_Line(Compare_Candidates(e, Rasul, Bill)'Image);

   -- grade 4
   Put_Line(Calculate_Percentage_Of_Candidate(e, Will)'Image);
   Put_Line(Calculate_Regional_Percentage_Of_Candidate(e, Budapest, Will)'Image);
   Print(e);
   Print(e, False);

   -- grade 5
   My_For_Each(e, Budapest);
   Print(e);

end Main;
```

```ada [election_package.ads]
generic
   type Candidates is (<>);
   type Regions is (<>);
package Election_Package is

   -- grade 2
   type Election(count: Integer) is limited private;

   procedure Initialize_Regional_Votes(e: in out Election);
   procedure Finalize_Votes(e: in out Election);

   function Final_Vote_Of_Candidate(e: Election; c: Candidates) return Integer;
   function Regional_Vote_Of_Candidate(e: Election; r: Regions; c: Candidates) return Integer;

   -- grade 3
   function Find_First_Place(e: Election) return Candidates;
   function Find_Last_Place(e: Election) return Candidates;
   function Find_N_th_Place(e: Election; n: Integer) return Candidates;
   function Compare_Candidates(e: Election; l, r: Candidates) return Boolean;

   -- grade 4
   function Calculate_Percentage_Of_Candidate(e: Election; c: Candidates) return Float;
   function Calculate_Regional_Percentage_Of_Candidate(e: Election; r: Regions; c: Candidates) return Float;

   procedure Print(e: Election; b: Boolean := True);

   -- grade 5
   generic
      with function Action(n: Integer) return Integer;
   procedure For_Each(e: in out Election; r: Regions);

private

   type Regional_Votes is array (Regions, Candidates) of Integer;
   type Final_Votes is array (Candidates) of Integer;

   type Election(count: Integer) is record
      rv: Regional_Votes;
      fv: Final_Votes := (others => 0);
   end record;

end Election_Package;
```

```ada [election_package.adb]
with Ada.Numerics.Discrete_Random, Ada.Text_IO;
use Ada.Text_IO;

package body Election_Package is

   -- grade 2

   procedure Initialize_Regional_Votes(e: in out Election) is
      subtype Votes is Integer range 0..50;
      package Votes_Random is new Ada.Numerics.Discrete_Random(Votes);
      seed: Votes_Random.Generator;
   begin
      Votes_Random.Reset(seed);
      e.rv := (others => (others => Votes_Random.Random(seed)));
   end Initialize_Regional_Votes;

   procedure Finalize_Votes(e: in out Election) is
   begin
      for i in e.rv'Range(1) loop
         for j in e.rv'Range(2) loop
            e.fv(j) := e.fv(j) + e.rv(i, j);
         end loop;
      end loop;
   end Finalize_Votes;

   function Final_Vote_Of_Candidate(e: Election; c: Candidates) return Integer
   is (e.fv(c));

   function Regional_Vote_Of_Candidate(e: Election; r: Regions; c: Candidates) return Integer
   is (e.rv(r, c));

   -- grade 3

   function Find_First_Place (e: Election) return Candidates is
      max_idx: Candidates := e.fv'First;
   begin
      for i in Candidates'Succ(e.fv'First)..e.fv'Last loop
         if e.fv(i) > e.fv(max_idx) then
            max_idx := i;
         end if;
      end loop;
      return max_idx;
   end Find_First_Place;

   function Find_Last_Place (e: Election) return Candidates is
      min_idx: Candidates := e.fv'First;
   begin
      for i in Candidates'Succ(e.fv'First)..e.fv'Last loop
         if e.fv(i) < e.fv(min_idx) then
            min_idx := i;
         end if;
      end loop;
      return min_idx;
   end Find_Last_Place;

   function Find_N_th_Place(e: Election; n: Integer) return Candidates is
      type Pair is record
         key: Candidates;
         val: Integer;
      end record;

      arr: array (Integer range 1..e.fv'Length) of Pair;
   begin
      -- convert final votes to array of key value
      declare
         iter: Integer := 1;
      begin
         for i in e.fv'Range loop
            arr(iter) := (i, e.fv(i));
            iter := iter + 1;
         end loop;
      end;

      -- sort
      for i in arr'First..Integer'Pred(arr'Last) loop
         for j in Integer'Succ(i)..arr'Last loop
            if arr(j).val > arr(i).val then
               declare
                  tmp: Pair := arr(i);
               begin
                  arr(i) := arr(j);
                  arr(j) := tmp;
               end;
            end if;
         end loop;
      end loop;

      return arr(n).key;
   end Find_N_th_Place;

   function Compare_Candidates(e: Election; lhs, rhs: Candidates) return Boolean
   is (e.fv(lhs) > e.fv(rhs));


   -- grade 4

   function Calculate_Percentage_Of_Candidate(e: Election; c: Candidates) return Float is
      s: Integer := 0;
   begin
      for v of e.fv loop
         s := s + v;
      end loop;

      return Float(e.fv(c)) / Float(s);
   end Calculate_Percentage_Of_Candidate;

   function Calculate_Regional_Percentage_Of_Candidate(e: Election; r: Regions; c: Candidates) return Float is
      s: Integer := 0;
   begin
      for i in e.rv'Range(2) loop
         s := s + e.rv(r, i);
      end loop;

      return Float(e.rv(r, c)) / Float(s);
   end Calculate_Regional_Percentage_Of_Candidate;

   procedure Print(e: Election; b: Boolean := True) is
   begin
      Put_Line("Elections:");
      if b then
         for i in e.rv'Range(1) loop
            Put_Line(i'Image & ":");
            for j in e.rv'Range(2) loop
               Put_Line(j'Image & ": " & e.rv(i, j)'Image);
            end loop;
         end loop;
      else
         for i in e.fv'Range loop
            Put_Line(i'Image & ": " & e.fv(i)'Image);
         end loop;
      end if;
   end Print;

   -- grade 5

   procedure For_Each(e: in out Election; r: Regions) is
   begin
      for i in e.rv'Range(2) loop
         e.rv(r, i) := Action(e.rv(r, i));
      end loop;
   end For_Each;

end Election_Package;
```

:::
