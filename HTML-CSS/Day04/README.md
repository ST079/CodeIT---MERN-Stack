# Day 4 Of MERN JOURNEY

CSS -> Cascading Style Sheet
-> It is the stylesheet that is used to style the HTML document.

<pre> 
    Web page styling like color, fonts, positioning, spacing

    Syntax :
    < selector > {
    property: value;
    ....
    }

    For e.g: 
    h1 {
        ...
    }

    .class-name {
    ... 
    }

    #id-name {
        ....
    }
</pre>

<h2>Selector</h2>
<pre>
Element Selector: h1, p, span : Lowest priority
Class Selector : Element > Class Priority < Id : Recommended for CSS (.class-name)
Id Selector: Highest priority (#id-name)
<br>
Note :<em> Class should be used for CSS, Id should be used for JS
           Class name can be reused multiple times, Id must be unique </em>
</pre>

<h2>CSS Usage Methods</h2>
<pre>
We can use the css in three different ways,
1. inline - highest priority - style attribute is used inside the element. 
2. internal - lowest priority - style tag is used inside the head tag.
3. external - least priority - separate css file is made and linked inside the head tag with link tage
</pre>

<h2>CSS Properties</h2>
<h3>color & background-color</h3>
<pre>
    In CSS, colors are specified by using a predefined color name, or with a RGB, HEX, HSL, RGBA, HSLA value.
</pre>

