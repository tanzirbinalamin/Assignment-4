1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

     Ans: By the getElementById we can just select the html elements which contains id . for example <div id="name">.So, in Javascript we can call the html element by getElementById("name").

      By the getElementsByClassName we can just select the html elements which contains Classes . for example <div class="name">.So, in Javascript we can call the html element by getElementsByClassName(".name").

      By the quarySelector we can select all the html elements includes id, classes and tagnames also.


2. How do you create and insert a new element into the DOM?

    Ans: To create new element into DOM ,
        const div = document.createElement("div");
        div.innerHTML=`
        <h1>Hello</h1>

        `
        const parent=document.quarySelector(body);
        parent.appendChild(div);

3. What is Event Bubbling? And how does it work?

    Ans: Event bubbling is a DOM event propagation mechanism where an event triggered on a child element triggers that  same event on all its parent elements, propagating upward to the root.

    How Event Bubbling Works:

    Target Phase: When you interact with an element (e.g., clicking a button), the event handler on that specific, innermost element fires first.

    Bubbling Phase: The event then propagates ("bubbles") up to its immediate parent element.
    Propagation Upward: This continues through every ancestor element (div=> body=> html=> document) until it reaches the root.

    Example: Clicking a <button> inside a <div> will trigger the button's click event, followed by the <div>'s click event, and finally the <body>'.

4. What is Event Delegation in JavaScript? Why is it useful?

    Ans:Event delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its descendant elements . Instead of attaching individual listeners to each child, the parent listener uses event bubbling to detect events from its children and then determines which child was the original target using properties like event.target. 

    It is useful for several key reasons:

    Performance: It saves memory and improves performance by reducing the number of event listeners that need to be created and managed [1, 4]. A single listener is much more efficient than potentially hundreds of individual ones.

    Dynamic Elements: It automatically handles events for elements that are added to the DOM dynamically after the initial page load [1, 2]. As long as they are children of the parent with the listener, they will work without any extra code.

    Cleaner Code: It results in less code, as you don't need loops to attach listeners to multiple elements. 

5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans: preventDefault() stops the default browser behavior of an element and stopPropagation() stops event bubbling.



        