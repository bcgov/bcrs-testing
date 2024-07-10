import { generateSlug } from "random-word-slugs"

export function generateCompanyName() {
    return generateSlug(4, { format: "title" });
}

export function generateNameAnalysisParams(name: string) {
    const params: string = '?name=' + encodeURI(name.toUpperCase()) + '&location=BC&entity_type_cd=CR&request_action_cd=NEW&jurisdiction=BC&analysis_type='
    return params
}
