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
       "icon":"b2b.webp"
    },
    {
      "name": "Air Tickets",
      "icon":"airticket.webp"
    },
    {
      "name": "Anything on Hire",
      "icon": "hire.webp"
    },
    {
      "name": "Apply for Loans",
      "icon": "loan.webp"
    },
    {
      "name": "Auto Care",
      "icon": "auto-care.webp"
    },
    {
      "name": "Auto Mobile",
      "icon": "auto-mobile.webp"
    },
    {
      "name": "Baby Care",
      "icon": "baby-care.webp"
    },
    { 
      "name": "Banqutes",
      "icon": "banquet.webp"
    },
    {
      "name": "Book Hotel",
      "icon": "book-hotels.webp"
    },
    {
      "name": "Books",
      "icon": "books.webp"
    },
    {
      "name": "Bus",
      "icon": "bus.webp"
    },
    {
      "name": "Cab & Car Rentals",
      "icon": "car-rental.webp"
    },
    {
      "name": "Caterers",
      "icon": "catering.webp"
    },
    {
      "name": "CCTV",
      "icon": "cctv.jpeg"
    },
    {
      "name": "Chemists",
      "icon": "chemists.webp"
    },
    {
      "name": "Civil Contrators",
      "icon": "civil-contractors.webp"
    },
    {
      "name": "Computer & Repairs",
      "icon": "computer.webp"
    },
    {
      "name": "Courier",
      "icon": "courier.webp"
    },
    {
      "name": "Daily Needs",
      "icon": "DailyNeeds.webp"
    },
    {
      "name": "Dance & Music",
      "icon": "Dance-Site-Banner.webp"
    },
    {
      "name": "Doctor",
      "icon": "doctor.webp"
    },
    {
      "name": "Education",
      "icon": "education.webp"
    },
    {
      "name": "Fitness",
      "icon": "fitness.webp"
    },
    {
      "name": "Flowers",
      "icon": "flower.webp"
    },
    {
      "name": "Home Improvements",
      "icon": "home-renovations-home-improvements.webp"
    },
    {
      "name": "Hospitals",
      "icon": "hospital.webp"
    },
    {
      "name": "House Keeping",
      "icon": "housekeeping-top-banner-new.webp"
    },
    {
      "name": "Insurance",
      "icon": "home-insurance-getty.webp"
    },
    {
      "name": "Jobs",
      "icon": "jobs.webp"
    },
    {
      "name": "Jewellery",
      "icon": "jewellery.webp"
    },
    {
      "name": "Labs",
      "icon": "labs.webp"
    },
    {
      "name": "Language Classes",
      "icon": "languages.webp"
    },
    {
      "name": "Medical",
      "icon": "medical.webp"
    },
    {
      "name": "On Demand Services",
      "icon": "ondemand-icon-7.webp"
    },
    {
      "name": "Packers and Movers",
      "icon": "packer-service.webp"
    },
    {
      "name": "Party",
      "icon": "party.webp"
    },
    {
      "name": "Personal Care",
      "icon": "personal-care.webp"
    },
    {
      "name": "Pest Control",
      "icon": "product-jpeg-500x500.webp"
    },
    {
      "name": "Pet & Pet Care",
      "icon": "dog-pet-care-icon-vector-10516419.webp"
    },
    {
      "name": "Play School",
      "icon": "play-school-interiors-500x500.webp"
    },
    {
      "name": "Real Estate",
      "icon": "real-estate-logo-.webp"
    },
    {
      "name": "Repairs",
      "icon": "repair.webp"
    },
    {
      "name": "Restaurants",
      "icon": "restaurants.webp"
    },
    {
      "name": "Security Services",
      "icon": "security.webp"
    },
    {
      "name": "Transporters",
      "icon": "transporters.webp"
    },
    {
      "name": "Wedding House",
      "icon": "wedding-house-01.webp"
    }
  ]

  
  constructor() { }

  ngOnInit() {}

}
