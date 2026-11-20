Allie ha preparato un lungo spiedino con 25 cibi gustosi:

![skewer](fig.asy)

Ora deve determinare il **valore** dello spiedino per portarlo al mercato. Per calcolarlo, deve seguire questa procedura:

![code](code.it.asy)

Qual è il valore calcolato alla fine di questa procedura?

:::answers{.openNumber}

?> 8

:::

> Ragionando sul programma di Allie, si vede che scorre tutti i valori $i$ da $1$ a $24$ ed esamina per ciascuno se i cibi nelle posizioni $i$ e $i+1$ sono diversi. In altre parole, Allie esamina tutte le coppie di cibi vicini, contando quante sono diverse. In pratica conta quante zone di cibi uguali ci sono sullo spiedino, che sono 8:
>
> 1.  le due patate;
> 2.  la mela;
> 3.  le due carote;
> 4.  le cinque fette di anguria;
> 5.  le due melanzane;
> 6.  le quattro fragole;
> 7.  le due banane; e infine
> 8.  i sette pomodori.

-----

Ora Allie vorrebbe modificare un po' il suo spiedino, in modo che il suo valore aumenti di $5$. Quanti cibi dovrà modificare come minimo per ottenere questo risultato?

:::answers{.openNumber}

?> 3

:::

> Possiamo creare $5$ zone di cibo in più cambiando solo tre cibi.
> Con un solo cibo possiamo spezzare una zona lunga almeno tre per farla diventare tre zone.
> Possiamo farlo due volte per aumentare il valore di $4$, per esempio sostituendo
> una fetta di anguria al centro con una patata e una delle fragole al centro con una mela.
>
> A questo punto dobbiamo ancora aumentare il valore di $1$. Possiamo farlo sostituendo un cibo
> all'estremità di una zona con uno diverso: per esempio, sostituendo una banana con una carota.
> Questo sarebbe il risultato finale:
>
> ![solution](sol.asy)
