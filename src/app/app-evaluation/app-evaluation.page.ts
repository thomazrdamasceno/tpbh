import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-app-evaluation',
  templateUrl: './app-evaluation.page.html',
  styleUrls: ['./app-evaluation.page.scss'],
})
export class AppEvaluationPage implements OnInit {

  values = [1,2,3,4,5];
  evaluation:any = {};
  sent = false;
  constructor(private afs: AngularFirestore) { }

  sendEvaluation(evaluation){
    evaluation.id = this.afs.createId();
    this.afs.doc(`app-evaluation/${evaluation.id}`).set(Object.assign(evaluation,{})).then(()=>{
      this.sent = true;
    });
  }
  ngOnInit() {
  }

}
