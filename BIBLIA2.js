
//Force this app to portrait mode.
cfg.Portrait

//Include scripts for each page.
app.Include( "Home.js" )
app.Include( "Questionnaire.js" )
app.Include( "Settings.js" )

//Main class for the app
class Main extends App
{
    //Called when app starts.
    onStart()
    {
        //Add main layout.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )

        //Create app bar and menu drawer.
        this.createBar()
        this.createDrawer()

        //Create page objects.
        this.home = new Home( this )
        this.questionnaire = new Questionnaire( this )
        this.settings = new Settings( this )

        //Create layout for pages and load home page.
        this.layPage = ui.addLayout( this.layMain, "frame", "", 1, 0.8 )
        this.home.show()
    var navs = [
            [ "Home", "home" ],
            [ "Questionnaire", "book" ],
            [ "Settings", "settings" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.layMain, navs, "secondary", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )
        this.layPage2 = ui.addLayout( this.layMain, "linear", "VCenter", 1, -1)
      
        
              var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a ButtonGroup control to the main layout
        this.btg = ui.addButtonGroup(this.layPage2, buttons, "", 0.9)

        // Add a callback handler for `onTouch` event
        this.btg.setOnTouch( this.onTouch )
    }

onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
    
    onChange(text, index)
    {
        ui.showPopup( text )
        }

    //Show a given page inside the page layout.
    showPage( name )
    {
        //Hide all pages.
        this.home.hide()
        this.questionnaire.hide()
        this.settings.hide()

        //Show chosen page.
        switch( name ) {
            case "Home": this.home.show(); break
            case "Questionnaire": this.questionnaire.show(); break
            case "Settings": this.settings.show(); break
        }
    }

    //Create a title bar with a menu icon.
    createBar()
    {
        //Add app bar.
        this.bar = ui.addAppBar( this.layMain, "MS Questionnaire", "menu" )
        this.bar.setOnMenu( () => { this.drawer.show() } )
    }

    //Create the menu drawer.
    createDrawer()
    {
        //Add a drawer layout.
        this.layDrawer = ui.addLayout( null, "Linear" )

        // Add a text control.
        this.txt = ui.addText(this.layDrawer, "MS Questionnaire", "vcenter,center,h5", 1, 0.1 )
        this.txt.backColor = "#2196f3"
        this.txt.textColor = "white"

        //Add an icon list to the drawer layout.
        //(Icons can be found here - https://fonts.google.com/icons)
        var menus1 = [["home", "Home"], ["book","Questionnaire"], ["settings", "Settings"]]
        this.lstMenu = ui.addList( this.layDrawer, menus1, "icon", 1 )
        this.lstMenu.setOnTouch( this.onMenu )

        //Create the drawer.
        var drawerWidth = platform.mobile ? 0.6 : 0.2
        this.drawer = ui.addDrawer( this.layDrawer, "left", drawerWidth )
        this.drawer.setOnClose( ()=>{ console.log("onClose") } )
    }

    //Handle drawer list item selection.
    onMenu( title, body, icon, index )
    {
        //Close drawer and load the chosen page.
        this.drawer.hide()
        this.showPage( title )
    }
    }