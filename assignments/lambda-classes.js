// CODE here for your Lambda Classes



class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
        speak(){
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        }
    }


class Instructor extends Person{
    constructor(personAttrs){
    super(personAttrs);
    this.specialty = personAttrs.specialty;
    this.favLanguage = personAttrs.favLanguage;
    this.catchPhrase = personAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }    
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    } 
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(favS){
        for (let i =0; i < favS.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    prAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const pace = new Instructor({
    name: 'Pace',
    age: '30-something',
    location: 'AZ',
    specialy: 'front-end',
    favLanguage: 'LESS',
    catchPhrase: "thank you guys",
});

const me = new Student({
    name: 'Omid',
    age: 'too old',
    location: 'Oregon',
    previousBackground: 'other stuff',
    className: 'webPT11',
    favSubjects: ['html', 'css', 'js']
})

const mindy = new ProjectManager({
    name: 'Mindy',
    age: 'will not try to guess',
    location: 'not sure',
    specialty: 'tl stuff',
    favLanguage: 'react',
    catchPhrase: 'good evening team',
    gradClassName: 'web19',
    favInstructor: 'I am not sure'
})

console.log(pace);
console.log(me);
console.log(mindy);
pace.demo('javascript stuff');
pace.grade(me, 'web stuff');
me.listsSubjects(me.favSubjects);
me.prAssignment('web stuff');
me.sprintChallenge('other web stuff');
mindy.standUp('mindypt11');
mindy.debugsCode(me.name,'web stuffs');
