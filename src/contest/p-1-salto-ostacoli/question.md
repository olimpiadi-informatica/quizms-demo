Bunny è appassionato di percorsi a ostacoli! Al momento si trova nella posizione $1$ di questo percorso:

![fig](fig.asy)

Il suo obiettivo è **raggiungere o superare** la posizione numero $17$, dove si trova la bandiera del traguardo.
Bunny può eseguire i seguenti blocchi:

  - **avanza**: Bunny avanza alla posizione successiva;
  - **salta**: Bunny salta la posizione successiva, atterrando su quella dopo;
  - **posizione**: la posizione attuale di Bunny;
  - **traguardo**: la posizione del traguardo;
  - **pietra marrone**: vero se Bunny si trova su una pietra marrone.

Però sul percorso ci sono dei *massi*! Bunny non può atterrare su una posizione occupata da un *masso*, altrimenti cadrebbe, ma può superarlo con un **salto**.
Se Bunny segue la procedura qui sotto, riesce a raggiungere la bandiera?

![code](code.it.asy)

:::answers{.multipleChoice}

  - [ ] no, perché si ferma prima di raggiungere il traguardo senza cadere
  - [ ] sì, raggiunge o supera il traguardo
  - [ ] no, perché cade sul *masso* in posizione $4$
  - [X] no, perché cade sul *masso* in posizione $10$
  - [ ] no, perché cade sul *masso* in posizione $16$

:::

> Bunny cade sul *masso* in posizione $10$.
>
> All'inizio si trova su una pietra marrone, quindi salta e arriva in posizione $3$.
> Anche lì la pietra è marrone, quindi salta di nuovo in posizione 5, e poi ancora in posizione 7.
> A questo punto la pietra è grigia, quindi avanza in posizione 8.
> Ma lì la pietra è marrone, quindi salta, cadendo direttamente sul *masso* in posizione $10$.

-----

Sullo stesso percorso a ostacoli, Bunny vuole provare alcune strategie diverse:

![fig](fig.asy)

![code](code-alt.it.asy)

Quali di queste strategie gli permetterebbero di raggiungere o superare il traguardo? Seleziona **tutte** le risposte corrette:

:::answers{.multipleResponse}

  - [ ] nessuna delle strategie qui sopra
  - [x] la strategia 1 funziona
  - [x] la strategia 2 funziona
  - [ ] la strategia 3 funziona

:::

> Funzionano entrambe le strategie 1 e 2.
>
> Con la strategia 2, Bunny salta sempre, toccando tutte le posizioni dispari ed evitando così tutti i massi,
> che invece si trovano in posizioni pari, finché non raggiunge il traguardo in posizione $17$.
>
> Con la strategia 1, Bunny salta a coppie: questo lo porta nelle posizioni $5$, $9$ e $13$, che hanno tutte
> pietre marroni, e poi raggiunge il traguardo in posizione $17$ senza mai avanzare.
>
> Con la strategia 3, invece, Bunny cade sul masso $16$.
> Comincia saltando sulle pietre marroni nelle posizioni $3$ e $5$ per raggiungere la posizione $7$.
> Da lì avanza due volte fino alla posizione $9$.
> A quel punto salta di nuovo in posizione $11$, e poi avanza due volte fino alla posizione $13$.
> Poi salta in posizione $15$ e da lì avanza, scontrandosi con il masso.
