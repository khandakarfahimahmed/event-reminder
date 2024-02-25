import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../../interfaces/event';
import { ApiClientService } from '../../services/api-client.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrl: './add-new-event.component.css',
})
export class AddNewEventComponent {
  @Output() newEvent: EventEmitter<Event> = new EventEmitter<Event>();
  minDateTime: string;
  eventingForm = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    date: new FormControl('', [Validators.required]),
    venue: new FormControl('', [Validators.required]),
  });

  constructor(private api: ApiClientService, private fb: FormBuilder) {
    const now = new Date();

    // Format the date and time as expected by datetime-local input
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2); // Adding 1 because January is 0
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);

    // Set the minDateTime variable
    this.minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  onSubmit() {
    console.log(this.eventingForm.value);
    this.postEvent();
    this.eventingForm.reset();
  }

  postEvent() {
    if (this.eventingForm.valid) {
      const { title, date, venue } = this.eventingForm.value;

      const eventData: Event = {
        title: title || '',
        date: date || '',
        venue: venue || '',
      };
      this.newEvent.emit(eventData);
      this.api.postEventList(eventData).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
