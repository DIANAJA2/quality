public class Main {
    public static void main(String[] args) {
        Person person = new Person("Ali", 25);
        person.sayHello();
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void sayHello() {
        System.out.println("Hello, my name is " + name + " and I'm " + age + " years old.");
    }
}
