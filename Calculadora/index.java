import java.util.Stack;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }
}

public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        
        System.out.println("Element at the top of the stack: " + stack.peek());
        
        while (!stack.isEmpty()) {
            System.out.println("Popped element: " + stack.pop());
        }
    }
}

import java.applet.Applet;
import java.awt.Graphics;

public class MiApplet extends Applet {
    public void init() {
        // Código que quieres ejecutar al iniciar el applet
        // Por ejemplo, imprimir un mensaje en la consola
        System.out.println("Applet inicializado");
    }

    public void paint(Graphics g) {
        // Método paint, que puedes utilizar para dibujar en el applet si es necesario
    }
}
