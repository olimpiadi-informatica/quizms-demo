Bunny is passionate about obstacle courses! He is currently on position $1$ of this course:

![fig](fig.asy)

His goal is to **reach or exceed** position number $17$ where the finish flag is.
Bunny can run the following blocks:

  - **advance**: Bunny advances to the next position;
  - **jump**: Bunny skips the next position with a jump, landing on the one after it;
  - **position**: Bunny's current position;
  - **finish line**: the position of the finish line;
  - **brown stone**: true if Bunny is currently on a brown stone.

However, there are *large rocks* on the course! Bunny cannot land on a position occupied by a *large rock*, otherwise he would fall, but he can overcome it with a **jump** action.
If Bunny follows the procedure below, can he reach the flag?

![code](code.asy)

  - [ ] no, because he stops before reaching the finish line without falling
  - [ ] yes, he reaches or exceeds the finish line
  - [ ] no, because he falls on the *large rock* in position $4$
  - [X] no, because he falls on the *large rock* in position $10$
  - [ ] no, because he falls on the *large rock* in position $16$

> Bunny falls on the *large rock* in position $10$.
>
> Initially, he is on a brown rock, and therefore jumps, arriving at position $3$.
> There too the rock is brown, so he jumps again to position 5, and once more to position 7.
> At this point the rock is gray, and so he advances to position 8.
> But since the rock there is brown, he jumps, falling directly onto the *large rock* in position $10$.

-----

Still on the same obstacle course, Bunny wants to try out few different strategies:

![fig](fig.asy)

![code](code-alt.asy)

Which of these strategies would allow him to reach or exceed the finish line? Select **all** correct answers:

  - [ ] none of the strategies above
  - [x] strategy 1 works
  - [x] strategy 2 works
  - [ ] strategy 3 works

> Both strategies 1 and 2 work.
>
> In strategy 2, Bunny always jumps, touching all odd positions and thus avoiding all large rocks,
> which are instead in even positions, until he reaches the finish line in position $17$.
>
> In strategy 1, Bunny jumps in pairs: this leads him through positions $5$, $9$, and $13$, all of which have
> brown rocks, and then he reaches the finish line in position $17$ without ever advancing.
>
> In strategy 3, however, Bunny falls on rock $16$.
> He starts by jumping on the brown rocks in positions $3$ and $5$ to reach position $7$.
> From there he advances twice to position $9$.
> At that point he jumps again to position $11$, and then advances twice to position $13$.
> Then he jumps to position $15$, and from there he advances, colliding with the large rock.
