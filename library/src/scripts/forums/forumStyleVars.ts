/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { useThemeCache, variableFactory } from "@library/styles/styleUtils";
import { IThemeVariables } from "@library/theming/themeReducer";
import { globalVariables } from "@library/styles/globalStyleVars";

export const forumVariables = useThemeCache((forcedVars?: IThemeVariables) => {
    const globalVars = globalVariables();
    const makeThemeVars = variableFactory("forum", forcedVars);

    const modern = makeThemeVars("modern", {});
    const table = makeThemeVars("table", {});

    const lists = makeThemeVars("lists", {
        spacing: {
            padding: {
                top: 15,
                right: globalVars.gutter.half,
                bottom: 16,
                left: globalVars.gutter.half,
            },
            margin: {
                top: "initial",
                right: "initial",
                bottom: "initial",
                left: "initial",
            },
        },
    });

    const discussions = makeThemeVars("discussions", {
        modern: {
            ...modern,
        },
        table: {
            ...table,
        },
    });

    const discussion = makeThemeVars("discussion", {});
    const categories = makeThemeVars("categories", {
        modern: {
            ...modern,
        },
        table: {
            ...table,
        },
        mixed: {},
    });

    return {
        modern,
        table,
        lists,
        discussions,
        discussion,
        categories,
    };
});
