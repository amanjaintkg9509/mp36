import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  
  categories= [
    {
       "name": "B2B",
       "icon":"b2b.png"
    },
    {
      "name": "Air Tickets",
      "icon":"airticket.jpg"
    },
    {
      "name": "Anything on Hire",
      "icon": "hire.png"
    },
    {
      "name": "Apply for Loans",
      "icon": "loan.png"
    },
    {
      "name": "Auto Care",
      "icon": "auto-care.jpg"
    },
    {
      "name": "Auto Mobile",
      "icon": "auto-mobile.jpg"
    },
    {
      "name": "Baby Care",
      "icon": "baby-care.jpg"
    },
    {
      "name": "Banqutes",
      "icon": "banquet.jpg"
    },
    {
      "name": "Book Hotel",
      "icon": "book-hotels.png"
    },
    {
      "name": "Books",
      "icon": "books.png"
    },
    {
      "name": "Bus",
      "icon": "bus.jpg"
    },
    {
      "name": "Cab & Car Rentals",
      "icon": "car-rental.png"
    },
    {
      "name": "Caterers",
      "icon": "catering.png"
    },
    {
      "name": "Chemists",
      "icon": "chemists.jpg"
    },
    {
      "name": "Civil Contrators",
      "icon": "civil-contractors.jpg"
    },
    {
      "name": "Computer & Repairs",
      "icon": "computer.png"
    },
    {
      "name": "Courier",
      "icon": "courier.jpg"
    },
    {
      "name": "Daily Needs",
      "icon": "DailyNeeds.jpg"
    },
    {
      "name": "Dance & Music",
      "icon": "Dance-Site-Banner.jpg"
    },
    {
      "name": "Doctor",
      "icon": "doctor.jpg"
    },
    {
      "name": "Education",
      "icon": "education.jpg"
    },
    {
      "name": "Fitness",
      "icon": "fitness.jpg"
    },
    {
      "name": "Flowers",
      "icon": "flower.jpg"
    },
    {
      "name": "Home Improvements",
      "icon": "home-renovations-home-improvements.jpg"
    },
    {
      "name": "Hospitals",
      "icon": "hospital.jpg"
    },
    {
      "name": "House Keeping",
      "icon": "housekeeping-top-banner-new.png"
    },
    {
      "name": "Insurance",
      "icon": "home-insurance-getty.jpg"
    },
    {
      "name": "Jobs",
      "icon": "jobs.jpg"
    },
    {
      "name": "Jewellery",
      "icon": "jewellery.jpg"
    },
    {
      "name": "Labs",
      "icon": "labs.jpg"
    },
    {
      "name": "Language Classes",
      "icon": "languages.jpg"
    },
    {
      "name": "Medical",
      "icon": "medical.png"
    },
    {
      "name": "On Demand Services",
      "icon": "ondemand-icon-7.jpg"
    },
    {
      "name": "Packers and Movers",
      "icon": "packer-service.jpg"
    },
    {
      "name": "Party",
      "icon": "party.jpg"
    },
    {
      "name": "Personal Care",
      "icon": "personal-care.png"
    },
    {
      "name": "Pest Control",
      "icon": "product-jpeg-500x500.jpg"
    },
    {
      "name": "Pet & Pet Care",
      "icon": "dog-pet-care-icon-vector-10516419.jpg"
    },
    {
      "name": "Play School",
      "icon": "play-school-interiors-500x500.jpg"
    },
    {
      "name": "Real Estate",
      "icon": "real-estate-logo-.jpg"
    },
    {
      "name": "Repairs",
      "icon": "repair.jpg"
    },
    {
      "name": "Restaurants",
      "icon": "restaurants.jpg"
    },
    {
      "name": "Security Services",
      "icon": "security.jpg"
    },
    {
      "name": "Transporters",
      "icon": "transporters.jpg"
    },
    {
      "name": "Wedding House",
      "icon": "wedding-house-01.jpg"
    }
  ]

  
  constructor() { }

  ngOnInit() {}

}
