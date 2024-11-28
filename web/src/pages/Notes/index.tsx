import React from "react";

import { Note as NoteEntity } from "../../entities/Note";
import Note from "../../components/Note";
import { Wrapper } from "./styled";

const notes: NoteEntity[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat tristique massa, ac condimentum arcu hendrerit maximus. Donec euismod nec eros non gravida. Cras vitae leo dui. Proin leo lorem, tincidunt vitae venenatis sit amet, eleifend eget ex. Sed fermentum enim non augue rhoncus, vel maximus elit molestie. Integer vel odio at dui pretium aliquet. In vehicula est vel sagittis vehicula. Phasellus blandit, sem a pretium congue, augue justo sollicitudin felis, sed lobortis elit massa id turpis. Vestibulum a lacus sollicitudin, semper tortor id, tincidunt leo. Cras dictum tempor justo non facilisis. Cras quis fermentum dui, non mattis ante. Proin at semper odio. Suspendisse consequat accumsan molestie. Morbi justo risus, porta vitae libero ac, porttitor vulputate ligula. Sed non tempor enim.",
    createdAt: new Date("2024-11-25T11:22:33.415Z"),
  },
  {
    content:
      "Donec id feugiat turpis. Praesent sed orci tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus odio, volutpat ut nibh non, pulvinar hendrerit diam. Maecenas sed ipsum sollicitudin, ultricies massa a, efficitur mauris. Integer est tellus, sodales nec auctor sed, ultricies non ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce posuere enim quam, feugiat auctor turpis pretium ac. Pellentesque non ultricies ipsum. Aenean ligula ex, hendrerit ut tempus et, auctor vitae leo.",
    createdAt: new Date("2024-11-26T04:50:20.843Z"),
  },
  {
    content:
      "Nullam odio urna, consequat ullamcorper hendrerit sit amet, tincidunt vitae dolor. Suspendisse elementum tincidunt nunc id eleifend. Maecenas sit amet quam auctor, ullamcorper libero at, sagittis eros. Etiam ornare tristique nunc vitae rutrum. Etiam nec cursus lorem. Sed viverra cursus iaculis. Maecenas interdum et ipsum ut varius. Etiam sagittis, nulla ut egestas euismod, ex metus posuere ipsum, rhoncus pharetra purus leo eu odio.",
    createdAt: new Date("2024-11-28T20:21:27.322Z"),
  },
];

export default function Notes() {
  return (
    <Wrapper>
      {notes.map(({ content, createdAt }) => (
        <Note content={content} createdAt={createdAt}></Note>
      ))}
    </Wrapper>
  );
}
