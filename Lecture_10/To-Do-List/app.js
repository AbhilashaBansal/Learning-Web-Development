$( () => {
    //IIFE
    $(document.body)
    .append(
        $('<input>').attr('id', 'inp')
    )
    .append(
        $('<button>').text("ADD")
        .click( ()=> {
            $('#tasklist')
            .append(
                $('<li>')
                    .text($('#inp').val())
                    .append(
                        $('<button>')
                            .text("❌")
                            .click((ev)=>{
                                $(ev.target).parent().remove();
                            })
                    )
                    .append(
                        $('<button>')
                            .text("⬆️")
                            .attr("class", "up")
                            .click((ev)=>{
                                $(ev.target).parent().insertBefore($(ev.target).parent().prev());
                            })
                    )
                    .append(
                        $('<button>')
                            .text("⬇️")
                            .attr("class", "down")
                            .click((ev)=>{
                                $(ev.target).parent().insertAfter($(ev.target).parent().next());
                            })
                    )
            )
            $('#inp').val("");
        })
    )
    .append(
        $('<ul>').attr('id', 'tasklist')
    )
});