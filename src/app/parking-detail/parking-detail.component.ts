import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkinginfo';
import { ActivatedRoute } from '@angular/router' ; //Import du récupérateur de route
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {

  parking: ParkingInfo | undefined; // On crée un objet parking qui peut être undefined

  constructor(private route: ActivatedRoute, private parkingService: ParkingService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;//paramètres de la route  
    const parkingId = Number(routeParams.get('id')); //Attention on utilise Number() à la place de Parseint() pour convertir le String en Int
    
    this.parkingService.getParking(parkingId).subscribe(
      reponse => {
        this.parking = reponse;
      }
    );
  }
}
