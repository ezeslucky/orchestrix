import { API, FileInfo, Options } from "jscodeshift";
import type { CommentKind, DirectiveKind } from "ast-types/gen/kinds";

export default function transform(file: FileInfo, api: API, options: Options) {

const j = api.jscodeshift;
const root = j(file.source);


const directivesToRemove = new Set([
    "use client", "use server" , "use-client", "use-server"
]);
//@ts-ignore
root.find(j.Program).forEach((path) => {
    if(path.node.directives) {

    const newDirectives : DirectiveKind[] = []
    let capturedComments: CommentKind[] = []
//@ts-ignore
    path.node.direactives.forEach((directive) => {
        if(directive.type === 'Directive' && directive.value.type === 'DirectiveLiteral' && typeof directive.value.value === 'string' && directivesToRemove.has(directive.value.value)){
if(directive.comments) {
    capturedComments.push(...directive.comments)
        }
}else{
    if(capturedComments.length > 0) {
        directive.comments = directive.comments || []
        directive.comments.unshift(...capturedComments)
        capturedComments = []
    }
    newDirectives.push(directive)
}
 })

    path.node.directives = newDirectives


    if(capturedComments.length > 0) {
if(path.node.body.length > 0) {
    const firstBodyNode = path.node.body[0]
    if(
        firstBodyNode
    ){
        firstBodyNode.comments = firstBodyNode.comments || []
        firstBodyNode.comments.unshift(...capturedComments)
    }

} else {
    path.node.comments = path.node.comments || []
    path.node.comments.push(...capturedComments)
}
    }


    }


if(path.node.body){
const newBody: any[] = []
let capturedComments: any[]= []
//@ts-ignore
path.node.body.forEach((node)=> {
    let shouldRemove = false
    if(j.ExpressionStatement.check(node)) {
       const expression = node.expression;
       if(j.StringLiteral.check(expression) && directivesToRemove.has(expression.value)){
        shouldRemove = true
       } else if(j.literal.check(expression) && typeof expression.value === 'string' && directivesToRemove.has(expression.value)){
        shouldRemove = true
       }
}
if(shouldRemove) {
    if(node.comments) {
        capturedComments.push(...node.comments)
    }
}else{
    if(capturedComments.length > 0) {
        node.comments = node.comments || []
        node.comments.unshift(...capturedComments)
        capturedComments = []
    }
    newBody.push(node)
}
})
path.node.body = newBody
}

})
return root.toSource(options)

}





