
//Class to create/show the Questionnaire page
class Questionnaire extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
    }

    show(questionnaireID = 1, questionID = 1, questionType = 1, interviewedID = 0, lastResponseToThisQuestion = null, datetimeStarted = new Date().toDateString(), dateTimeCompleted = new Date().toDateString())
    {
    alert(datetimeStarted)
        //If layout not created yet.
        if( !this.lay )
        {
        		var s = ""
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear", "fillxy,vcenter,hcenter" )
            this.lay.setChildMargins( .05, .05, .05, .05 )

						if(questionID == 1) {
							s = "Tell us your full name: "
							alert(s);
						}else{
            //Add some text.
            s = "This is your <strong>settings page</strong>."
            }
            this.txtHome = ui.addText( this.lay, s, "Multiline,Html" )
						this.txtHome.textSize = 20;
						if(questionType == 1) {
								this.tfd2 = ui.addTextField(this.lay, "", "Outlined,Secondary", 0.7)
        			this.tfd2.label = "Enter the full name"
        			this.tfd2.textSize = 32
        			this.tfd2.setStartAdornment("person", "Icon")
        }
            //Add a button with primary color.
            this.btnHello = ui.addButton( this.lay, "Hello Settings", "primary" )
            this.btnHello.setOnTouch( ()=>{ ui.showPopup("hi","bottom") } )
        }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}