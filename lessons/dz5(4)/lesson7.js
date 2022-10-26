class Student{
	constructor(surname,name,birthdate,marks){
		this.surname = surname;
		this.name = name;
		this.birthdate = birthdate;
		this.marks = marks;
		this.attendance = [];
	}
age(){
	return (2022 - this.birthdate)
}

avgMark(){
	this.sum = 0;
	for(let i =0  ; i<this.marks.length;i++){
		if(this.marks[i]>0){
			this.sum += this.marks[i]
		}
	}
	this.avg = this.sum / this.marks.length;
	return this.avg;
}
present(){
	if(this.attendance.length <25){
		this.attendance.push(true)
	}
	return this.attendance;
}
absent (){
	if(this.attendance.length <25){
		this.attendance.push(false)
	}
	return this.attendance;
}
avgAttendance(){
	this.sumAtten = 0;
	for(let j =0  ; j<this.attendance.length;j++){
		if(this.attendance[j]>0){
			this.sumAtten += this.attendance[j]
		}
	}
	this.avgAtten = this.sumAtten / this.attendance.length;
	return this.avgAtten;
}
summary(){
if(this.avg > 90 &&  this.avgAtten > 0.9){
return 'Молодец!';
} else if((this.avg < 90 && this.avgAtten > 0.9) || (this.avg > 90 && this.avgAtten < 0.9)){
	return 'Хорошо, но можно лучше';
} else if (this.avg < 90 && this.avgAtten < 0.9){
	return 'Редиска!';
}
}
}


const student = new Student('ivanov','ivan',2004,[95,80,93,75,70])
console.log(student)
console.log(' возраст студента:' + student.age())
console.log('средний бал:' + student.avgMark())
student.present();
student.absent();
student.present();
student.present();
student.absent();
console.log(student);
console.log( ' средняя посещаемость:' + student.avgAttendance())
console.log(student.summary());


const student2 = new Student('ivanova','katya',2003,[95,100,93,85,90])
console.log(student2)
console.log(' возраст студента:' + student2.age())
console.log('средний бал:' + student2.avgMark())
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
console.log(student2);
console.log( ' средняя посещаемость:' + student2.avgAttendance())
console.log(student2.summary());

const student3 = new Student('petrov','andrey',2002,[75,80,93,85,70])
console.log(student3)
console.log(' возраст студента:' + student3.age())
console.log('средний бал:' + student3.avgMark())
student3.present();
student3.present();
student3.present();
student3.present();
console.log(student3);
console.log( ' средняя посещаемость:' + student3.avgAttendance())
console.log(student3.summary());