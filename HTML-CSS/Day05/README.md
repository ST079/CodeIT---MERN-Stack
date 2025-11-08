# Day 5 Of MERN JOURNEY

<h2>Display Property </h2>
The display property is an important CSS property for controlling layout. It specifies whether an HTML element is treated as a block or an inline element.<br>
Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is block or inline. The display property is used to change the default display behavior of HTML elements.
<pre>

1. block
   -> A block-level element ALWAYS starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
   Examples of block-level elements:
   div, h1 - h6, p, form, header, footer, section etc...
2. inline
   -> An inline element DOES NOT start on a new line and only takes up as much width as necessary.
   Examples of inline elements:
   span, a, img etc....
3. inline - block
   -> Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height, width, padding, and margin values
4. none
   -> When using display: none; the element is completely hidden from the document flow and does not take up any space.

Note : <em> You can also use visibility:hidden; to hide an element. However, with this property, the element will be hidden,
but it will still take up the same space as if it was visible:</em>

</pre>

<h2> Flex Property </h2>
This property helps to group the elements and align those elements in row or column.
<pre>
The flex property is a shorthand property for: flex-grow flex-shrink flex-basis
flex-grow -> it grows the size of the flex element to fit in flex container.
flex-shrink -> it  reduce the width of the flex element at the size of the frame decreases.
flex-basis -> it sets the width of the flex item.  if 0 all the items will be of same size

syntax : flex: flex-grow flex-shrink flex-basis
recommended: flex: 1 1 0

</pre>
<h2>list</h2>
<pre>
The list-style property is a shorthand for the following properties:

1. list-style-type -> Specifies the type of list-item marker. Default value is "disc"
2. list-style-position ->Specifies where to place the list-item marker. Default value is "outside"
3. list-style-image -> Specifies the type of list-item marker. Default value is "none"

Note:<em>If one of the values are missing, the default value for that property will be used.
also if we set list-style: none, disc will also be removed</em>

</pre>

<h2>pseudo-class</h2>
also called (fake) class properties. It is applied to the existing class. eg hover, before, after, etc..
<pre>
eg:
.title:hover{
    color:red;
}
</pre>
<h2>Units</h2>
<pre>
px (pixel), em (relative to parent), rem (relative to root), vh (viewing height), vw (viewing width), in (inch), cm 
</pre>

<h2>Overflow</h2>
The CSS overflow property controls what happens to content that is too big to fit into an area.
<pre>
1. visible - Default. The overflow is not clipped. The content renders outside the element's box
2. hidden - The overflow is clipped, and the rest of the content is hidden
3. scroll - Scrollbars are added. User must scroll to see all content
4. auto - Similar to scroll, but adds scrollbars only when necessary <br>
The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both):
1. overflow-x specifies what to do with the left/right edges of the content.
2. overflow-y specifies what to do with the top/bottom edges of the content.
</pre>
