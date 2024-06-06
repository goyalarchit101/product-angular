import { Component, OnDestroy, OnInit } from '@angular/core';
import { IproductType } from './productInterface';
import { ProdcutServiceService } from '../prodcut-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  showTable: boolean = true;
  // tabledata = [1,2,3,4,5];
  showImage: any = true;
  name:string = "";
  products:IproductType[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: '"GDN-0011"',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: '"GDN-0023"',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32,
      starRating: 4.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      productId: 3,
      productName: 'Hammer',
      productCode: '"GDN-0048"',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
      productId: 4,
      productName: 'Leaf Rake',
      productCode: '"GDN-0011"',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'https://openclipart.org/download/320423/superoldphone.svg'
    },
    {
      productId: 5,
      productName: 'Garden Cart',
      productCode: '"GDN-0023"',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        'https://openclipart.org/download/320419/surgicalanddentaltools-1885crutches-crop.svg'
    },
    {
      productId: 6,
      productName: 'Hammer',
      productCode: '"GDN-0048"',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'https://openclipart.org/download/320452/hammock-0035321zdkzrp.svg'
    },
    {
      productId: 7,
      productName: 'Garden Cart',
      productCode: '"GDN-0023"',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.999,
      starRating: 4.2,
      imageUrl: 'https://openclipart.org/download/320438/firetruckfront.svg'
    },
    {
      productId: 8,
      productName: 'Hammer',
      productCode: '"GDN-0048"',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'https://openclipart.org/download/320454/ramen-0043603fxgxpa.svg'
    }
  ]
  fProducts : IproductType[] = [];
  private productSubcription: Subscription = new Subscription();
  constructor(private productService: ProdcutServiceService) { }

  ngOnInit(): void {

    this.fProducts = this.products;
    this.onNameChange(this.name);

    // subscribe the serivce
    this.productSubcription = this.productService.getMissions().subscribe(data=>{
      console.log(data);
    })
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  onNameChange(value: any) :void{
    if(value){
      this.fProducts = this.products.filter((product) => product.productName.toLowerCase().includes(value.toLowerCase()));
    }
    else{
      this.fProducts = this.products;
    }
  }

  ngOnDestroy(): void {
      if(this.productSubcription){
        // prevent the memory leak
        this.productSubcription.unsubscribe();
      }
  }



}