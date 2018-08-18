import { Selector } from 'testcafe';
import f from '../lib';


fixture("Getting Started")
    .page ("http://kbs.digitalprizm.net/login");

 


test('Price Item List', async t => {

	
	await f.login('administrator', 'admin')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")
	await f.toggle_speak(true)

	/*await f.speak(`Hi.

			Welcome to KBS Digital Prizm ERP Next tutorials.

            In this video, we will learn how to Edit items and price details.`)

	await f.add_slide({
			title: "Edit item and Price",
			})

    await f.speak(`here we can edit the item and respective prices of item.`)

    await f.remove_slide()

    await f.speak(`On dashboard you can see item icon. click on and start the tutorial.`)*/



	await f.click_icon("Item")

	/*await f.speak(`This is a item dashboard aginst which item has to changed or created      created as yet. Let's make an entry for the advance payment 
                Select Diesel item from the list.`)*/


	await f.click_list_item("Diesel")

	/*await f.speak(`After selecting diesel item you can see details of diesel item.`)
	await f.speak(`To change price of this item please Click on View Button was located at upper right side of Diesel Dashboard`)*/


	await f.click_toolbar_button("View")

	/*await f.speak(`In View list select Add/Edit Price to change the price of diesel`)
	await f.pause(1)*/

	await f.click_dropdown_item("Add / Edit Prices")

	/*await f.speak(`Here you can see diesel list because according to counrty the prices of diesel is different. Select diesel item which you want to change`)
*/


	await f.click_list_item("Diesel")

	/*await f.speak(`Here you can change the rate of diesel. Just scrolldown and go to rate option and change the value. `)*/

	await f.fill_field("price_list_rate", "2.0")

	/*await f.speak(` After adding the rate just click on Save button `)*/

	await f.click_primary_button("Save")

	/*await f.speak(`
            Hope you found this video tutorial useful. 
            Thanks for watching.`)*/
	
    


    
    });
