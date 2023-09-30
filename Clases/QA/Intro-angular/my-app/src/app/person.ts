const AGE_FOR_DRIVE = 18;
export class Person {
    private age: number =0;
    /**
   * @return Age of this person
   */
  getAge() {

    return this.age;
  }
  /**
   * @param age Age of this person
   */
  setAge(age:number) {

    this.age = age;
  }
  canDrive() {

    return this.getAge() >= AGE_FOR_DRIVE;
  }
}
