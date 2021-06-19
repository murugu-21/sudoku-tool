const About = () => {
  return (
    <div>
      <h1>Sudoku</h1>
      <p>
        Sudoku is a puzzle game. The goal is to fill the 9X9 grid with numbers 1
        to 9. No row, column or box should have the same number twice. This site
        is a culmination of my inspiration from other sites and extra features
        that i thought were missing in the other sites. I am currently working
        on a super cool feature that can scan a image containing a sudoku puzzle
        and convert it into digital puzzle that can be solved on this platform
        with the help of tools available here. I beleive the repetitive work of
        making notes and checking for silly mistakes(atleast wherever possible)
        should be left to a computer while you working on finding patterns in
        the sudoku. ofcourse my philosophy makes all easy puzzles a non starter
        because the notes kind of give the solution. But it makes solving hard
        puzzles much less monotonous and much more fun because now i only need
        to concentrate on finding patterns.
      </p>
      <p>
        I am currently using open cv and tensorflow keras to build my image to
        grid model. will add the feature once accuracy improves.
      </p>
      <p>
        If you find any issues please mail me at murugu2001@gmail.com. I will
        look into it and fix as soon as i can.
      </p>
      <p>This site is made using react and react-bootsrap</p>
    </div>
  );
};

export default About;
