import { memo, useMemo, useState } from "react";

function Sample() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  const person = useMemo(() => ({ name, age }), [name, age]);

  return <Profile person={person} />;
}

const Profile = memo(function Profile({ person }) {
  // ...
});

// function Page() {
//     const [name, setName] = useState('Taylor');
//     const [age, setAge] = useState(42);
//     return <Profile name={name} age={age} />;
//   }
