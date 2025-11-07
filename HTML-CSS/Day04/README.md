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
<br>
Note: <em> If the font name is more than one word, it must be in quotation marks, like: "Times New Roman". </em>
eg:  font-family: "Times New Roman", Times, serif;
</pre>

<h4>Font Style</h4>
<pre>
This property can have one of the following values:

1. normal - The text is shown normally
2. italic - The text is shown in italics
3. oblique - The text is "leaning" (oblique is very similar to italic)
</pre>

<h3>Text</h3>
<pre>
The CSS text-decoration-line property sets the type of decoration line added to the text.

1. none - Default value. Displays no decoration line
2. underline - The decoration line is displayed under the text
3. overline - The decoration line is displayed over the text
4. line-through - The decoration line is displayed through the text
<br>
Tip:<em> You can combine multiple values, like overline and underline to display lines both over and under a text. </em>
</pre>
<h3>Box Model</h3>
In CSS, the term "box model" is used when talking about web design and layout.
The CSS box model is essentially a box that wraps around every HTML element.
Every box consists of four parts: content, padding, borders and margin
<pre>
1. Content - The content of the box, where text and images appear
2. Padding - Clears an area around the content. The padding is transparent (basically space inside the border)
3. Border - A border that goes around the padding and content
4. Margin - Clears an area outside the border. The margin is transparent
</pre>