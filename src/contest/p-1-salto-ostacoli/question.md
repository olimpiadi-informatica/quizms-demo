Bunny è ormai appassionato di percorsi ad ostacoli, e si trova quindi ora sulla casella $1$ di questo nuovo percorso:

![fig](fig.asy)

Come sempre, il suo obbiettivo è **raggiungere o superare** la casella numero $17$ dove c'è la bandierina del traguardo.
Bunny può fare le seguenti cose:
+ **avanza**: Bunny avanza alla casella successiva;
+ **salta**: Bunny supera la casella successiva con un salto, atterrando su quella dopo;
+ **posizione**: la posizione corrente di Bunny;
+ **traguardo**: la posizione del traguardo;
+ **pietra marrone**: vero se Bunny si trova ora su una pietra marrone.

Come nell'ultimo percorso ad ostacoli, sul percorso ci sono delle *grandi rocce*! Bunny non può arrivare su una casella occupata da una *grande roccia*, altrimenti cadrebbe, ma può superarla grazie ad un'azione **salta**.
Se Bunny segue il procedimento qui sotto, riesce a raggiungere la bandierina?

![code](code.asy)

- [ ] no, perchè si ferma prima di arrivare al traguardo senza cadere
- [ ] si, raggiunge o supera la bandierina
- [ ] no, perchè cade sulla *grande roccia* in posizione $4$
- [X] no, perchè cade sulla *grande roccia* in posizione $10$
- [ ] no, perchè cade sulla *grande roccia* in posizione $16$

---

Sempre nello stesso percorso ad ostacoli, Bunny vuole provare un po' di strategie diverse:

![fig](fig.asy)

![code](code-alt.asy)

Quali di queste strategie gli consentono di raggiungere o superare il traguardo?


- [ ] la strategia 1
- [ ] la strategia 2
- [ ] la strategia 3
- [x] le strategie 1 e 2
- [ ] le strategie 2 e 3
