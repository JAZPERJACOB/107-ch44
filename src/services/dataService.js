let catalog = [
    {
        "title":"2024 Ferrari",
        "category":"Sports Car",
        "price": 200500.00,
        "image": "ferrari.jpg",
        "_id": "1",
    }
];

class DataService {

    getProducts(){
        return catalog;
    }

};

export default DataService;