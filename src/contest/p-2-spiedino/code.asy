access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        instr_block(element("set"), choice_block(e("value")), element("to"), data_block(e("1"))),
        instr_block(element("set"), choice_block(e("i")), element("to"), data_block(e("1"))),
        for_block(
            block_content(e("repeat"), data_block(e("24")), e("times:")),
            block_sequence(
                if_block(
                    block_content(e("if"), cond_block(data_block(e("food in position"), data_block(e("i"))), e("not equal"), data_block(e("food in position"), data_block(data_block(e("i")), e("+"), data_block(e("1")))))),
                    instr_block(e("increase"), choice_block(e("value")), element("by"), data_block(e("1")))
                ),
                instr_block(e("increase"), choice_block(e("i")), element("by"), data_block(e("1")))
            )
        )
    )
);

add(P.drawing());
