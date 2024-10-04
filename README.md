# Photo App

* __Purpose :__ The web app allows museum visitors to take and view pictures using automated photographing devices placed throughout the museum.
* __User Experience :__ The app is designed to be small in size yet highly qualitative, focusing on a sober and simple user interface.
* __Functionality :__ 
    * Visitors receive a device to remotely activate the cameras and capture images.
    * Captured pictures are immediately uploaded to a central server and stored in a database.
    * Visitors can refresh the app regularly to view new pictures while exploring the museum.
* __Album Session Types :__
    * Once the visit ends, the session changes to a **long-term mode**, which modifies the app's options slightly.
    * In long-term mode, users can download a zipped file containing all their pictures in full quality.
* __State Change :__ The transition from live to long-term status will typically be managed by a cron job, but it can be switched manually for demonstration purposes.

---
## Requirements :

- [ ] __Database :__ Use MySQL.
- [ ] __Backend Language :__ PHP (with a framework of your choice).
- [x] __Design :__ The web app should look 100% like the provided template. Use the template as the starting point and adapt it for the app's purposes.
- [ ] __Server Requirements :__
  - [ ] Must be able to run MySQL.
  - [ ] Must be able to send emails.
  - [ ] Must be publicly accessible.
- [ ] __Video Demonstration :__ Provide a video demonstration of the entire process, explaining each step and showing that everything works as intended.
- [ ] __Working Staging :__ Set up a working staging version of the app with a URL for testing. Ensure it is thoroughly tested before submission, as initial impressions will significantly affect scoring.
- [ ] __Database Access :__ Provide access to the database via phpMyAdmin, allowing us to edit or add entries while interacting with the app.

---
## Template to use : [Aside](https://uicookies.com/demo/theme/aside/)

## Main View:

- [x] __Image Display :__ Show all pictures on one long scrollable page, with the most recent images at the top.
- [ ] __Ajax Calls :__ Implement Ajax calls in the background:
  - [ ] Every 20 seconds.
  - [ ] Every time the page is focused or moved (please provide the best event trigger for this).
- [ ] __Manual Refresh :__ Enable manual refresh by sliding the first (top) picture down, appending new pictures to the existing ones without a full refresh (include a loading GIF for feedback).
- [x] __Refresh Icon :__ Add a refresh icon at the top left to allow users to refresh from there.
- [x] __Image Interaction :__ 
  - [x] Remove the whitening effect on hover.
  - [x] Allow users to click on an image to open it in full quality.
  - [x] Display a text under the image: "Long click on the image and click save to camera roll."
- [ ] __Back Arrow :__ Replace the refresh icon in the top left corner with a back arrow to navigate back.
- [x] __Move Menu Toggle :__ Menu Toggle should be on the right side.
    - [x] Popup menu should slide in from the right.
- [x] __Menu Items :__
    - [x] __Receive all my pictures, with Email Icon__ 
        * Accessible only on Live-access
        * Opens to a Modal that ask for the user's email address
    - [x] __Invite a friend to this album, with Add Smartphone Icon__
        * Accessible only on Live-access
        * Opens to a Modal with a QR code
    - [x] __Invite a friend to this album, with Add Friend Icon__
        * Accessible only on Longterm-access
        * Opens to a Modal that ask for the friend's email address
    - [x] __Download all my pictures__
        * Accessible only on Longterm-access
        * Should offer a direct download to a ZIP file with all the pictures in full size.
    
## Suggested Database Arrangement :

- __Album__
  - Id
  - remote_id
  - Date_add
  - Date_over
  - Date_upd
  - Status (live or long-term)
  - Venue_id (to preserve data integrity even if the remote changes venues)
  
- __User__
  - Id
  - Date_add
  - Album_id
  - Email
  - Name
  - Log (e.g., if the user has downloaded a zip file)

- __Remote__ (the small remote device that triggers a capture on a Photobooth)
  - Id
  - Venue_id

- __Venue__
  - Id
  - Name

- __Photobooth__ (the large device that takes pictures)
  - Id
  - Venue_id
  - Name

- __Capture__
  - Id
  - Album_id
  - Date_add


---

## Deployed Frontend : [Netlify Deploy](https://willowy-valkyrie-b2a3af.netlify.app/)
    