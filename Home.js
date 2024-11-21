
//Class to create/show the home page
class Home extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
    }

    show()
    {
        //If layout not created yet.
        if( !this.lay )
        {
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear",  "fillxy,vcenter" )
            this.lay.setChildMargins( .02, .02, .02, .01 )

            //Add icon
            this.txtIcon = ui.addText( this.lay, "home", "Primary,Icon")
            this.txtIcon.textSize = "2em"

            //Add some text.
            var s = "This is your <strong>home page</strong>."
            this.txtHome = ui.addText( this.lay, s, "Multiline,Html" )
            this.txtHome.textSize = "0.7em"
            
            //Add a button with primary color.
        this.btn = ui.addButton( this.lay, "Start", "" )
        this.btn.setOnTouch( ()=>{ app.Vibrate( "0,100,30,100" ); } )
        //this.btn.setUrls(["#this.main.layPage"])
        
    }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}