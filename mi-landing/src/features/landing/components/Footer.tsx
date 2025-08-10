export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} Danny Uribe — Todos los derechos reservados.
      </div>
    </footer>
  )
}