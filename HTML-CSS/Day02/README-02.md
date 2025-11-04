# Day 2 Of MERN JOURNEY

# WWW: World wide web,

1. Runs on Internet
2. Websites are made of HTML (structure), CSS (Styling), JavaScript (Interactivity/Behavior)

# Client-Server Model

1. Client: The browser that sends request to the server.
2. Server: The machine that hosts website and sends response.

# Lesson for the day

<h1>Text Formating </h1>
1. Heading Tag (h1 to h6)
<pre>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</pre>
2. Paragraph Tag (p)
<pre>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
        aliquid, illo totam quibusdam voluptate ad, perspiciatis distinctio
        architecto nemo id harum libero!Deleniti at animi iste facere modi earum
        quis quod asperiores voluptatibus impedit cumque voluptatum dolor,
        accusamus nemo, beatae sapiente aperiam quos nisi aliquam, corrupti
        voluptas ducimus. Dicta?
    </p>
</pre>

3. strong (bolds the text)
4. em (something like itallic)
<pre>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, labore sed.
        <strong>Ratione</strong> quo enim <em>architecto</em> maxime mollitia
        praesentium aliquid aut?
    </p>
</pre>

5. sup
<pre>
(Lifts the letter from its normal position like a<sup>2</sup>)
</pre>

6. sub
<pre>
 (push down the letter from its normal position like a<sub>2</sub>)
</pre>

7. pre (Displays without formating)
<pre>
    const name = "Sujan"
</pre>

8. br (Breaks into new line)
9. hr (Creates a horizontal line like a divider)
<hr>
<h1>Comments</h1>
<p>Comments are those which are not displayed on the webpage. To Create a comment in HTML, <br> we do :<pre> < !-- your comment --> </pre></p>
<hr>

<h1>Media and links</h1>

1. Anchor Tag - Creates Hyperlinks.
<pre>
    < a href="https://www.google.com">Google< /a>
    < a href="https://www.veltaraconsultants.com.np" target="_blank"> Sujan Tamang< /a>
    <a href="https://www.google.com">Google</a>
    <a href="https://www.tamangsujan.com.np" target="_blank">Sujan Tamang</a>
</pre>

2. Image Tag - insert image in the webpage.
<pre>
     < img src="https://hips.hearstapps.com/hmg-prod/images/ginger-maine-coon-kitten-running-on-lawn-in-royalty-free-image-1719608142.jpg?crop=1xw:0.84415xh;0,0.185xh"
        alt="" height="100" /> 
     <img src="https://hips.hearstapps.com/hmg-prod/images/ginger-maine-coon-kitten-running-on-lawn-in-royalty-free-image-1719608142.jpg?crop=1xw:0.84415xh;0,0.185xh"
        alt="" height="100" />
</pre>

3. Video Tag - insert Video in the webpage
<pre>
     < div>
        < video  src="./assets/videos/cat.mp4" height="200" controls autoplay loop>< /video>
    < /div>
     <div>
        <video  src="./assets/videos/cat.mp4" height="200" controls autoplay loop></video>
    </div>
</pre>

4. iframe - to embbed another html document
<pre>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AG_VuBlEVf0?si=qja6BqLD3YzcrRS4"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</pre>