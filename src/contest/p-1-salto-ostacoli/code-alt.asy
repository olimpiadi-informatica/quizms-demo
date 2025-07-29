access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    row(2, 0, (0.5,0.5),
        block_sequence(
            start_block(e("Strategy 1")),
            for_block(
                block_content(e("repeat while"), cond_block(data_block(e("position")), e("less than"), data_block(e("finish line"))), e(":")),
                else_block(
                    block_content(e("if"), cond_block(e("brown stone"))),
                    block_sequence(
                        instr_block(element("jump")),
                        instr_block(element("jump"))
                    ),
                    block_content(e("otherwise: ")),
                    instr_block(element("advance"))
                )
            )
        ),
        block_sequence(
            start_block(e("Strategy 2")),
            for_block(
                block_content(e("repeat while"), cond_block(data_block(e("position")), e("less than"), data_block(e("finish line"))), e(":")),
                instr_block(e("jump"))
            )
        ),
        block_sequence(
            start_block(e("Strategy 3")),
            for_block(
                block_content(e("repeat while"), cond_block(data_block(e("position")), e("less than"), data_block(e("finish line"))), e(":")),
                else_block(
                    block_content(e("if"), cond_block(e("brown stone"))),
                    instr_block(element("jump")),
                    block_content(e("otherwise: ")),
                    block_sequence(
                        instr_block(element("advance")),
                        instr_block(element("advance"))
                    )
                )
            )
        )
    );

add(P.drawing());
