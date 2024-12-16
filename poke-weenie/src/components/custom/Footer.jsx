function Footer() {
  return (
    <div className="bg-slate-300 flex text-center justify-center">
      <span className="text-lg font-bold p-4">
        © 2023 PokeWeenie
        <p className="text-sm font-light">
          Website created by&nbsp;
          <a
            href="https://www.linkedin.com/in/gabrloh/"
            className="underline hover:text-primary-foreground transition-colors"
          >
            Gabriel Loh
          </a>
        </p>
      </span>
    </div>
  );
}

export default Footer;
