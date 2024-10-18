import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css',
})
export class SongFormComponent implements OnInit {
  songForm: FormGroup;
  albumId!: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.songForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      order: ['', Validators.required],
      date: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('albumId')!;
  }

  onSubmit(): void {
    if (this.songForm.valid) {
      // Aquí puedes manejar el envío del formulario para agregar la canción
      console.log('Nueva canción:', this.songForm.value);
    }
  }
}
