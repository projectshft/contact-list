export const ContactsStateData = {
  people: [
      {
        id: Math.round(Math.random() * 100000000), // or use uuid
        name: "Adam Conley",
        image_url:
          "https://img.mlbstatic.com/mlb-photos/image/upload/w_60,d_headshot_silo_generic.png,ar_1:1,c_pad,b_auto:border,q_auto:best/v1/people/543045/headshot/milb/current",
        email: "aconley@dbulls.com",
        phone_number: "15555555557",
      },
      {
        id: Math.round(Math.random() * 100000000),
        name: "Adrian De Horta",
        image_url:
          "https://img.mlbstatic.com/mlb-photos/image/upload/w_60,ar_1:1,c_pad,b_auto:border,q_auto:best/v1/people/641506/headshot/83/t234/current",
        email: "adehorta@dbuls.com",
        phone_number: "15555555555",
      },
    ],
    all: function() {
      return this.people;
    },
    get: function(id) {
      const isPerson = p => p.id === id;
      return this.people.find(isPerson);
    }
  };

  
// export {
//   get: (//write funtion to return the data),
//   set: (// argument would be new item, destructure data and  const handleAdd = (todo) => {
//   setTodos([...todos, todo]);
// })
// }

