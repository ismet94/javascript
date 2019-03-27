// Put simply, HTTP is a protocol which allows us to send information around the web, For example, when your browser asks for http://domain. HTTP requests com in different flavours, using different verbs (GET, POST, PUT and DELETE are the four most common). The kind of request your browser makes (and the kind we will use )

// AJAX stands for Asynchronomous Javascript and XML. Now there's a mouthful.

// BAsically, it is a  system that allows us to send requests and handle the responses from our javascript code. For example, when you leave a comment on a blog post, when you send or recieve e-mail on a webmail service like Gmail, or when a webpage updates itself without refreshing. It is often using AJAX to do so.

// Two other initialises you may see in this context are API and JSON.

    // API stands for Application PRogramming Interface. MAny companies and services provide API's which will react in specific ways when we send then HTTP requests. You will come across a few in this course.

    // a set of functions and procedures allowing the creation of applications taht access the features or data of an operating system, application, or other services.

    // JSON, or Javascript Object Notation, is a way of representing and handling data as a Javascript object. IT is a extremely useful for sending and receiving data over the internet, as it makes it easy to deal with structured data.

    function newQuote() {
        // the URL we are maing a resuest to
        let url = "https://api.chucknorris.io/jokes/random?category=dev";

        $.ajax({
            url: url,
            method: 'get',

            success: function (data) {
                // do something when call is successful
                console.log(data);
                $('#quote').text(data.value);
                $('#url').attr('href', data.url);
                $('#icon').attr('src', data.icon_url);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }    

    $(document),ready(function () {
        newQuote();
        $('button').on('click', newQuote());
    });