Allie has prepared a long skewer with 25 tasty foods:

![skewer](fig.asy)

Now she needs to determine the **value** of the skewer to take it to the market. To calculate it, she must follow this procedure:

![code](code.asy)

What is the value calculated at the end of this procedure?

?> 8

> Reasoning about Allie's program, one can see that it loops through all values $i$ from $1$ to $24$, examining for each whether the foods in positions $i$ and $i+1$ are different. In other words, Allie is examining all pairs of neighboring foods, counting how many are different. This practically counts how many different zones of identical foods there are on the skewer, which are 8:
>
> 1.  the two potatoes;
> 2.  the apple;
> 3.  the two carrots;
> 4.  the five watermelon slices;
> 5.  the two eggplants;
> 6.  the four strawberries;
> 7.  the two bananas; and finally
> 8.  the seven tomatoes.

-----

Allie is now thinking that she would like to change her skewer a bit, so that its value increases by $5$. How many foods will she need to modify at minimum to achieve this result?

?> 3

> We can create $5$ more food zones by changing only three foods.
> With a single food we can break a zone that is at least three long to make it become three zones.
> We can do this twice to increase the value by $4$, for example by replacing
> a watermelon slice in the middle with a potato and one of the strawberries in the middle with an apple.
>
> At this point we still need to increase the value by $1$. We can do this by replacing a food
> at the end of a zone with a different one: for example, replacing a banana with a carrot.
> This would be the final result:
>
> ![solution](sol.asy)
