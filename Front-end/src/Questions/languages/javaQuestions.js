export const javaQuestions = {
    
        "easy": [
          {
            "id": "java_e1",
            "question": "What is the correct syntax to output 'Hello World' in Java?",
            "options": [
              "System.out.println('Hello World');",
              "console.log('Hello World');",
              "print('Hello World');",
              "echo('Hello World');"
            ],
            "answer": "System.out.println('Hello World');",
            "points": 10
          },
          {
            "id": "java_e2",
            "question": "Which data type is used to store a single character in Java?",
            "options": ["String", "char", "int", "boolean"],
            "answer": "char",
            "points": 10
          },
          {
            "id": "java_e3",
            "question": "What is the entry point of a Java program?",
            "options": [
              "main() method",
              "start() method",
              "init() method",
              "run() method"
            ],
            "answer": "main() method",
            "points": 10
          },
          {
            "id": "java_e4",
            "question": "Which keyword is used to define a class in Java?",
            "options": ["class", "interface", "struct", "object"],
            "answer": "class",
            "points": 10
          },
          {
            "id": "java_e5",
            "question": "What is the default value of an int variable in Java?",
            "options": ["0", "null", "1", "undefined"],
            "answer": "0",
            "points": 10
          },
          {
            "id": "java_e6",
            "question": "Which operator is used to compare two values in Java?",
            "options": ["=", "==", "===", "!="],
            "answer": "==",
            "points": 10
          },
          {
            "id": "java_e7",
            "question": "What is the output of 5 / 2 in Java?",
            "options": ["2.5", "2", "2.0", "Error"],
            "answer": "2",
            "points": 10
          },
          {
            "id": "java_e8",
            "question": "Which keyword is used to create an object in Java?",
            "options": ["new", "create", "object", "instance"],
            "answer": "new",
            "points": 10
          },
          {
            "id": "java_e9",
            "question": "What is the size of the int data type in Java?",
            "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            "answer": "4 bytes",
            "points": 10
          },
          {
            "id": "java_e10",
            "question": "What is the output of 'Hello' + 'World' in Java?",
            "options": ["HelloWorld", "Hello World", "Error", "Hello+World"],
            "answer": "HelloWorld",
            "points": 10
          }
        ],
        "medium": [
          {
            "id": "java_m1",
            "question": "What is the purpose of the 'final' keyword in Java?",
            "options": [
              "To prevent inheritance",
              "To prevent method overriding",
              "To declare constants",
              "All of the above"
            ],
            "answer": "All of the above",
            "points": 20
          },
          {
            "id": "java_m2",
            "question": "What is the output of the following code? int x = 5; System.out.println(x++);",
            "options": ["5", "6", "Error", "undefined"],
            "answer": "5",
            "points": 20
          },
          {
            "id": "java_m3",
            "question": "What is the difference between == and .equals() in Java?",
            "options": [
              "== compares references, .equals() compares values",
              "== compares values, .equals() compares references",
              "Both are the same",
              "None of the above"
            ],
            "answer": "== compares references, .equals() compares values",
            "points": 20
          },
          {
            "id": "java_m4",
            "question": "What is the output of the following code? String s = null; System.out.println(s.length());",
            "options": ["0", "null", "Error", "undefined"],
            "answer": "Error",
            "points": 20
          },
          {
            "id": "java_m5",
            "question": "What is the purpose of the 'super' keyword in Java?",
            "options": [
              "To call the parent class constructor",
              "To call the child class constructor",
              "To call a static method",
              "None of the above"
            ],
            "answer": "To call the parent class constructor",
            "points": 20
          },
          {
            "id": "java_m6",
            "question": "What is the output of the following code? System.out.println(Math.sqrt(-1));",
            "options": ["0", "1", "NaN", "Error"],
            "answer": "NaN",
            "points": 20
          },
          {
            "id": "java_m7",
            "question": "What is the default value of a boolean variable in Java?",
            "options": ["true", "false", "null", "undefined"],
            "answer": "false",
            "points": 20
          },
          {
            "id": "java_m8",
            "question": "What is the output of the following code? int[] arr = new int[5]; System.out.println(arr[0]);",
            "options": ["0", "null", "Error", "undefined"],
            "answer": "0",
            "points": 20
          },
          {
            "id": "java_m9",
            "question": "What is the purpose of the 'this' keyword in Java?",
            "options": [
              "To refer to the current object",
              "To refer to the parent object",
              "To create a new object",
              "None of the above"
            ],
            "answer": "To refer to the current object",
            "points": 20
          },
          {
            "id": "java_m10",
            "question": "What is the output of the following code? System.out.println(10 >> 1);",
            "options": ["5", "10", "20", "Error"],
            "answer": "5",
            "points": 20
          }
        ],
        "difficult": [
          {
            "id": "java_d1",
            "question": "What is the difference between ArrayList and LinkedList in Java?",
            "options": [
              "ArrayList is faster for random access, LinkedList is faster for insertions/deletions",
              "LinkedList is faster for random access, ArrayList is faster for insertions/deletions",
              "Both are the same",
              "None of the above"
            ],
            "answer": "ArrayList is faster for random access, LinkedList is faster for insertions/deletions",
            "points": 30
          },
          {
            "id": "java_d2",
            "question": "What is the output of the following code? String s1 = new String('Hello'); String s2 = new String('Hello'); System.out.println(s1 == s2);",
            "options": ["true", "false", "Error", "undefined"],
            "answer": "false",
            "points": 30
          },
          {
            "id": "java_d3",
            "question": "What is the purpose of the 'volatile' keyword in Java?",
            "options": [
              "To ensure thread safety",
              "To improve performance",
              "To prevent garbage collection",
              "None of the above"
            ],
            "answer": "To ensure thread safety",
            "points": 30
          },
          {
            "id": "java_d4",
            "question": "What is the output of the following code? System.out.println(0.1 + 0.2 == 0.3);",
            "options": ["true", "false", "Error", "undefined"],
            "answer": "false",
            "points": 30
          },
          {
            "id": "java_d5",
            "question": "What is the purpose of the 'transient' keyword in Java?",
            "options": [
              "To prevent serialization of a field",
              "To make a field thread-safe",
              "To improve performance",
              "None of the above"
            ],
            "answer": "To prevent serialization of a field",
            "points": 30
          },
          {
            "id": "java_d6",
            "question": "What is the output of the following code? System.out.println(1 << 3);",
            "options": ["1", "3", "8", "Error"],
            "answer": "8",
            "points": 30
          },
          {
            "id": "java_d7",
            "question": "What is the purpose of the 'synchronized' keyword in Java?",
            "options": [
              "To ensure thread safety",
              "To improve performance",
              "To prevent garbage collection",
              "None of the above"
            ],
            "answer": "To ensure thread safety",
            "points": 30
          },
          {
            "id": "java_d8",
            "question": "What is the output of the following code? System.out.println(10 / 0);",
            "options": ["0", "10", "Error", "undefined"],
            "answer": "Error",
            "points": 30
          },
          {
            "id": "java_d9",
            "question": "What is the purpose of the 'try-with-resources' statement in Java?",
            "options": [
              "To automatically close resources",
              "To handle exceptions",
              "To improve performance",
              "None of the above"
            ],
            "answer": "To automatically close resources",
            "points": 30
          },
          {
            "id": "java_d10",
            "question": "What is the output of the following code? System.out.println(1 + 2 + '3');",
            "options": ["6", "33", "123", "Error"],
            "answer": "33",
            "points": 30
          }
        ]
      
}