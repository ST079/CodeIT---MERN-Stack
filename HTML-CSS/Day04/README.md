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

color:rgb(255, 99, 71);
color:#ff6347;
color:hsl(9, 100%, 64%);
color:rgba(255, 99, 71, 0.5);
color:hsla(9, 100%, 64%, 0.5);
</pre>

<h3>Fonts</h3>
<pre>
1.Serif fonts - have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2.Sans-serif fonts - have clean lines (no small strokes attached). They create a modern and minimalistic look.
3.Monospace fonts - here all the letters have the same fixed width. They create a mechanical look.
4.Cursive fonts - imitate human handwriting.
5.Fantasy fonts - are decorative/playful fonts.

Note: <em> If the font name is more than one word, it must be in quotation marks, like: "Times New Roman". </em>
eg:  font-family: "Times New Roman", Times, serif;
</pre>
