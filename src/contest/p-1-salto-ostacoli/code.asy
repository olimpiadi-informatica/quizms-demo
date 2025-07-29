access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    block_sequence(
        for_block(
            block_content(e("repeat while"), cond_block(data_block(e("position")), e("less than"), data_block(e("finish line"))), e(":")),
            else_block(
                block_content(e("if"), cond_block(e("brown stone"))),
                instr_block(element("jump")),
                block_content(e("otherwise: ")),
                instr_block(element("advance"))
            )
        )
    );

add(P.drawing());
