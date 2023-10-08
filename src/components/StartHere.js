export default function StartHere() {
  return (
    <>
      <h1>🚩 Start Here</h1>
      <p>😀 Hey! This is a contact list app that I built using React and React Router.</p>
      <h2>⚙ Features</h2>
      <p>To get started, click "New" to create a new contact. </p>
      <p>Fill out as much (or as little) information about your contact as you would like. If you leave your contact blank, they will show up as <i>No Name</i> in your contacts sidebar.</p>
      <p>To edit a contact once you've created it, click "Edit" and change whichever fields you would like.</p>
      <p>Once you have a number of contacts created, you might want to search for one in your contacts search bar. This will sort through your contacts and display any that match your search term.</p>
      <p>If you find yourself on a page that doesn't exist, you will run into a 404 error page and be redirected back here.</p>
      <p>⚠ Note: Right now, this app does not utilize local storage, so if you reload the browser, your contacts will be lost.</p>
    </>
  );
}
